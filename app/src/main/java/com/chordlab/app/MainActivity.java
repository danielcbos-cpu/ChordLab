package com.chordlab.app;

import android.app.Activity;
import android.content.res.AssetManager;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.Locale;

public class MainActivity extends Activity {
    private static final String HOST = "chordlab.local";
    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Window window = getWindow();
        window.setStatusBarColor(Color.rgb(14, 44, 69));
        window.setNavigationBarColor(Color.BLACK);

        webView = new WebView(this);
        webView.setBackgroundColor(Color.rgb(244, 245, 247));
        webView.setOverScrollMode(View.OVER_SCROLL_NEVER);
        webView.setVerticalScrollBarEnabled(false);
        webView.setHorizontalScrollBarEnabled(false);

        WebSettings s = webView.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setBuiltInZoomControls(false);
        s.setDisplayZoomControls(false);
        s.setTextZoom(100);
        s.setSupportZoom(false);
        s.setLoadsImagesAutomatically(true);
        s.setMixedContentMode(WebSettings.MIXED_CONTENT_NEVER_ALLOW);

        webView.setWebChromeClient(new WebChromeClient());
        webView.setWebViewClient(new LocalAssetClient(getAssets()));
        setContentView(webView);
        webView.loadUrl("https://" + HOST + "/index.html");
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) webView.goBack();
        else super.onBackPressed();
    }

    private static final class LocalAssetClient extends WebViewClient {
        private final AssetManager assets;
        LocalAssetClient(AssetManager assets) { this.assets = assets; }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest request) {
            return serve(request.getUrl().toString());
        }

        @SuppressWarnings("deprecation")
        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, String url) {
            return serve(url);
        }

        private WebResourceResponse serve(String url) {
            String prefix = "https://" + HOST + "/";
            if (!url.startsWith(prefix)) return null;
            String path = url.substring(prefix.length());
            int q = path.indexOf('?');
            if (q >= 0) path = path.substring(0, q);
            int h = path.indexOf('#');
            if (h >= 0) path = path.substring(0, h);
            if (path.isEmpty()) path = "index.html";
            if (path.contains("..")) return notFound();

            try {
                InputStream stream = assets.open(path, AssetManager.ACCESS_STREAMING);
                String mime = mime(path);
                String encoding = isText(mime) ? "UTF-8" : null;
                return new WebResourceResponse(mime, encoding, stream);
            } catch (IOException ignored) {
                return notFound();
            }
        }

        private WebResourceResponse notFound() {
            return new WebResourceResponse("text/plain", "UTF-8", 404, "Not Found", null,
                    new java.io.ByteArrayInputStream(new byte[0]));
        }

        private static boolean isText(String mime) {
            return mime.startsWith("text/") || mime.contains("javascript") || mime.contains("json") || mime.contains("xml");
        }

        private static String mime(String path) {
            String p = path.toLowerCase(Locale.US);
            if (p.endsWith(".html")) return "text/html";
            if (p.endsWith(".js")) return "text/javascript";
            if (p.endsWith(".css")) return "text/css";
            if (p.endsWith(".json")) return "application/json";
            if (p.endsWith(".sf3") || p.endsWith(".sf2")) return "audio/x-soundfont";
            if (p.endsWith(".wav")) return "audio/wav";
            if (p.endsWith(".mp3")) return "audio/mpeg";
            if (p.endsWith(".png")) return "image/png";
            if (p.endsWith(".jpg") || p.endsWith(".jpeg")) return "image/jpeg";
            if (p.endsWith(".svg")) return "image/svg+xml";
            if (p.endsWith(".woff2")) return "font/woff2";
            if (p.endsWith(".woff")) return "font/woff";
            return "application/octet-stream";
        }
    }
}

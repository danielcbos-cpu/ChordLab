# ChordLab Android v0.2.1 — Portrait UI

Proyecto Android Studio nativo que envuelve el paquete web de ChordLab v0.2.1 mediante un WebView local.

## Incluye
- ChordLab v0.2.1 Portrait UI.
- GeneralUser GS SF3 local.
- SpessaSynth y motor armónico incluidos en `app/src/main/assets/`.
- WebView sin dependencia de Internet para los recursos de ChordLab.
- `https://chordlab.local/` como origen local seguro para que `fetch()` y `AudioWorklet` funcionen correctamente.
- Portrait y Landscape.
- Pantalla sin ActionBar.
- Safe areas gestionadas por la propia interfaz web.
- Nombre: ChordLab.
- VersionCode: 201.
- VersionName: 0.2.1.

## Abrir en Android Studio
1. Abre la carpeta `ChordLab_Android_v0.2.1_AndroidStudio`.
2. Deja que Android Studio configure/sincronice Gradle.
3. Instala un Android SDK con API 35.
4. Ejecuta `app` en un teléfono Android o genera un APK desde **Build > Build APK(s)**.

## Nota sobre el entorno de esta sesión
El proyecto queda completamente preparado, pero esta sesión no dispone de Android SDK/Gradle/aapt2 instalados, por lo que aquí no se puede producir el binario APK final. El proyecto está pensado para compilarse directamente en Android Studio.

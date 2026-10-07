# ChordLab Android v0.3.0 — GitHub Builder

Este proyecto está preparado para compilar automáticamente el APK de ChordLab mediante GitHub Actions.

## Primera puesta en marcha

1. Sube **todo el contenido de esta carpeta** a la raíz de tu repositorio `ChordLab`.
2. Haz commit a la rama `main`.
3. En GitHub abre **Actions**.
4. Selecciona **Build ChordLab APK**.
5. Pulsa **Run workflow** si quieres lanzar una compilación manual.
6. Cuando termine correctamente, entra en la ejecución y descarga el artefacto:
   `ChordLab-v0.3.0-debug`.
7. Dentro estará `app-debug.apk`.

El workflow prepara Java 17, Android SDK 35, Build Tools 35.0.0 y Gradle 8.7 automáticamente.

## Importante

- No necesitas instalar Android SDK en tu PC para que GitHub Actions compile.
- No subas contraseñas, tokens ni claves privadas al repositorio.
- El APK generado es una build **debug**, adecuada para probarla en tu teléfono.
- Más adelante podemos añadir firma de release y generación automática de versiones.

# ChordLab Android v0.2.1
# Ejecutar desde la raíz del proyecto en una máquina con Android Studio/Gradle configurados.
if (Test-Path .\gradlew.bat) {
  .\gradlew.bat assembleDebug
} else {
  Write-Host "No existe gradlew.bat. Abre el proyecto en Android Studio y sincroniza Gradle." -ForegroundColor Yellow
}

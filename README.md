## Wiki lokal initialisieren

- Klone das Repository
- Öffne ein neues Terminal in deinem lokalen Repo-Ordner und erstelle ein neues venv:
    ```shell
    python -m venv venv
    ```
- Warte bis das venv erstellt wurde, dann aktiviere es mit dem folgenden Befehl (Wenn du im Terminal oder der CMD-Konsole arbeitest musst du `venv/Scripts/activate.bat` nutzen, im VS Code Terminal/Powershell funktioniert das activate auch ohne `.bat`-Endung):
    ```shell
    venv/Scripts/activate
    ```
- Nun sollte ein `(venv)` vor deinem Path im Terminal erscheinen
- Jetzt solltest du mit pip mkdocs-material installieren:
    ```shell
    pip install mkdocs-material
    ```
- Nachdem mkdocs erfolgreich installiert wurde kannst du einen lokalen Entwicklungsserver mit dem folgenden Befehl starten:
    ```shell
    mkdocs serve 
    ```
- Dadurch sollte der Entwicklungsserver standardmäßig unter folgender Adresse erreichbar sein [localhost:8000](http://localhost:8000)
- Wenn du einen anderen Port für den Server nutzen willst kannst du das wie folgt machen (Ändere 1924 zu deinem gewünschten Port):
    ```shell
    mkdocs serve -a localhost:1924
    ```

## Zugang:
Unter folgendem Link kannst die aktuellste Version der Dokumentation aufrufen werden:

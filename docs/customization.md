---
icon: material/puzzle
---

# :material-puzzle: Customization
Zusätzlich zu allen Möglichkeiten die MkDocs Material von Haus aus bietet, gibt es weitere für dieses Projekt erstellte Inhalte:

## Admonitions
Folgende Admonitions existieren zusätzlich: 

!!! image inline end "Bilder"
    
```
!!! image "Bilder"
    ![image](assets/img/logo.svg)
```

!!! aws inline end "Amazon Web Services"
    
```
!!! aws "Amazon Web Services"
    ![image](assets/img/logo.svg)
```

!!! gcp inline end "Google Cloud Platform"
    
```
!!! gcp "Google Cloud Platform"
    ![image](assets/img/logo.svg)
```

!!! azure inline end "Microsoft Azure"
    
```
!!! azure "Microsoft Azure"
    ![image](assets/img/logo.svg)
```

#### Width Optionen
Für diese Dokumentation wurden für das inline end argument eigene width Optionen erstellt:

!!! info inline end w25 "Breite - 25%"

```
!!! info inline end w25 "Breite - 25%"

```

!!! info inline end "Breite - Normal"

```
!!! info inline end "Breite - Normal"

```

!!! info inline end w35 "Breite - 35%"

```
!!! info inline end w35 "Breite - 35%"

```

!!! info inline end w50 "Breite - 50%"

```
!!! info inline end w50 "Breite - 50%"

```

#### Admonition hinzufügen
Eine Anleitung um neue Admonitions zu erstellen ist auf dem [MkDocs GitHub](https://squidfunk.github.io/mkdocs-material/reference/admonitions/#customization) zu finden. Um eine neue Admonition zu erstellen, kannst du diese in der [admonitions.css](assets/stylesheets/admonitions.css) Datei einfügen. 
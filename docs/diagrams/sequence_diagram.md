# UML-Sequenzdiagramme

Ein UML-Sequenzdiagramm ist ein Diagrammtyp in der Unified Modeling Language (UML), der die Interaktionen zwischen Objekten in einem System grafisch darstellt. Diese Interaktionen werden in einer zeitlichen Abfolge dargestellt, wodurch das Sequenzdiagramm besonders nützlich für die Modellierung von Nachrichtenflüssen und Prozessen ist.

## Zweck

Das Hauptziel eines UML-Sequenzdiagramms besteht darin, die zeitliche Abfolge von Interaktionen zwischen den Objekten eines Systems zu visualisieren. Es hilft, die Kommunikation und den Informationsaustausch zwischen den Objekten sowie den zeitlichen Ablauf von Aktivitäten zu verstehen.

## Elemente eines UML-Sequenzdiagramms

Ein UML-Sequenzdiagramm besteht aus verschiedenen Elementen, die die Struktur und die Interaktionen im System darstellen. Die wichtigsten Elemente sind:

### Lebenslinien

Lebenslinien repräsentieren die Objekte, die an der Interaktion beteiligt sind. Sie werden als vertikale Linien dargestellt und können Namen und Typen haben, um die Identifizierung zu erleichtern.

### Aktivierungsbalken

Aktivierungsbalken werden auf den Lebenslinien platziert, um anzuzeigen, wann ein bestimmtes Objekt aktiv ist und Nachrichten verarbeitet.

### Nachrichten

Nachrichten zeigen die Kommunikation zwischen den Objekten an. Sie können synchron oder asynchron sein und verschiedene Arten von Interaktionen darstellen, wie beispielsweise Methodenaufrufe, Rückgaben oder Ausnahmen.

### Fragment

Ein Fragment ist eine Gruppe von Nachrichten, die eine bestimmte Bedingung oder eine wiederholte Sequenz von Interaktionen darstellen. Fragmente werden verwendet, um komplexe Verhaltensweisen darzustellen, wie beispielsweise Schleifen oder bedingte Anweisungen.

### Stereotypen

Stereotypen sind optionale Tags, die verwendet werden können, um die Bedeutung oder die Art einer Nachricht oder eines Objekts zu erweitern. Sie können benutzerdefinierte Rollen oder Funktionen kennzeichnen.

## Verwendung von UML-Sequenzdiagrammen

UML-Sequenzdiagramme werden in verschiedenen Phasen der Softwareentwicklung eingesetzt:

### Analysephase

In der Analysephase helfen Sequenzdiagramme, die Interaktionen zwischen verschiedenen Systemkomponenten zu verstehen und die Anforderungen zu spezifizieren.

### Designphase

In der Designphase dienen Sequenzdiagramme dazu, die Architektur und das Verhalten des Systems zu entwerfen. Sie helfen, Klassenstrukturen, Schnittstellen und Interaktionsmuster zu definieren.

### Implementierungsphase

Während der Implementierung unterstützen Sequenzdiagramme Entwickler dabei, den Code basierend auf den definierten Interaktionen zwischen den Objekten zu schreiben.

### Testphase

In der Testphase können Sequenzdiagramme verwendet werden, um Testfälle abzuleiten und sicherzustellen, dass das System gemäß den Spezifikationen funktioniert.

## Beispiel

``` mermaid
sequenceDiagram
    participant web as Web Browser
    participant blog as Blog Service
    participant account as Account Service
    participant mail as Mail Service
    participant db as Storage

    Note over web,db: The user must be logged in to submit blog posts
    web->>+account: Logs in using credentials
    account->>db: Query stored accounts
    db->>account: Respond with query result

    alt Credentials not found
        account->>web: Invalid credentials
    else Credentials found
        account->>-web: Successfully logged in

        Note over web,db: When the user is authenticated, they can now submit new posts
        web->>+blog: Submit new post
        blog->>db: Store post data

        par Notifications
            blog--)mail: Send mail to blog subscribers
            blog--)db: Store in-site notifications
        and Response
            blog-->>-web: Successfully posted
        end
    end
```


## Fazit
UML-Sequenzdiagramme sind ein leistungsstarkes Werkzeug zur Visualisierung von Interaktionen und Verhalten in einem System. Sie ermöglichen es, komplexe Prozesse einfach zu verstehen und sind daher ein wesentlicher Bestandteil der Softwareentwicklung. Durch die Verwendung von Sequenzdiagrammen können Teams effizienter kommunizieren, Probleme identifizieren und Lösungen entwerfen.

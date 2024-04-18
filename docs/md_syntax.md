---
icon: simple/markdown
---

# :simple-markdown: Markdown Sytax

## Überschriften

!!! info inline end w50 font18

    ```no-highlight
    # H1

    ## H2

    ### H3

    #### H4

    ##### H5
    
    ###### H6

    ```

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Hervorhebung

``` title="Fetter Text"
Fett gedruckter Text mit wird zwei `*` vor und nach dem Wort angegeben:

**Fettgedruckter Text**
```

<div class="result" markdown>

**Fettgedruckter Text**

</div>

``` title="Unterstrichener Text"
Unterstrichener Text mit wird zwei `^` vor und nach dem Wort angegeben:

^^Unterstrichener Text^^
```

<div class="result" markdown>

^^Unterstrichener Text^^

</div>

``` title="Italic Text"
Italic gedruckter Text mit wird je einem `_` vor und nach dem Wort angegeben:

_Italic Text_
```

<div class="result" markdown>

_Italic Text_

</div>

``` title="Hervorgehobener Text"
Hervorgehobener Text mit wird zwei `=` vor und nach dem Wort angegeben:

==Hervorgehobener Text==
```

<div class="result" markdown>

==Hervorgehobener Text==

</div>

``` title="Durchgestrichener Text"
Durchgestrichener Text mit wird zwei `~` vor und nach dem Wort angegeben:

~~Durchgestrichener Text~~
```

<div class="result" markdown>

~~Durchgestrichener Text~~

</div>

!!! tip "Weitere Informationen"
    Für weitere, detailliertere Informationen zu den Formattierungsoptionen von MkDocs Material kann der entsprechende [Dokumentationsabschnitt](https://squidfunk.github.io/mkdocs-material/reference/formatting/) genutzt werden. Dort gibt es auch Informationen für das Darstellen von [Mathematischen Ausdrücken](https://squidfunk.github.io/mkdocs-material/reference/math/) und [Tastaturkeys](https://squidfunk.github.io/mkdocs-material/reference/formatting/#adding-keyboard-keys).


## Listen

(In diesem Beispiel werden Leerzeichen und Einrückungen mit einem Punkt dargestellt: ``⋅``)

```no-highlight
1. Erstes Element der Liste
2. Weiteres Element
⋅⋅* Ungeordnete Unterliste
1. Tatsächliche Zahlen spielen keine Rolle, nur dass es eine Zahl ist.
⋅⋅1. Geordnete Unterliste
4. Und ein weiteres Element

⋅⋅⋅Sie können richtig eingerückte Absätze innerhalb von Listenelementen haben. Beachten Sie die Leerzeile oben und die führenden Leerzeichen (mindestens eines, aber wir werden hier drei verwenden, um auch das rohe Markdown auszurichten).

⋅⋅⋅Um einen Zeilenumbruch ohne Absatz zu haben, müssen zwei nachgestellte Leerzeichen verwendet werden.⋅⋅
⋅⋅⋅Nehmen Sie zur Kenntnis, dass diese Zeile getrennt ist, aber im selben Absatz steht.⋅⋅
⋅⋅⋅(Dies steht im Gegensatz zum typischen GFM-Zeilenumbruchverhalten, bei dem keine abschließenden Leerzeichen erforderlich sind.)

* Ungeordnete Listen können Sternchen verwenden
- Oder Minuszeichen
+ Oder Pluszeichen
```

1. Erstes Element der Liste
2. Weiteres Element
    * Ungeordnete Unterliste
1. Tatsächliche Zahlen spielen keine Rolle, nur dass es eine Zahl ist.
    1. Geordnete Unterliste
4. Und ein weiteres Element

   Sie können richtig eingerückte Absätze innerhalb von Listenelementen haben. Beachten Sie die Leerzeile oben und die führenden Leerzeichen (mindestens eines, aber wir werden hier drei verwenden, um auch das rohe Markdown auszurichten).

   Um einen Zeilenumbruch ohne Absatz zu haben, müssen zwei nachgestellte Leerzeichen verwendet werden.  
   Nehmen Sie zur Kenntnis, dass diese Zeile getrennt ist, aber im selben Absatz steht.
   (Dies steht im Gegensatz zum typischen GFM-Zeilenumbruchverhalten, bei dem keine abschließenden Leerzeichen erforderlich sind.)

* Ungeordnete Listen können Sternchen verwenden
- Oder Minuszeichen
+ Oder Pluszeichen

## Links

Es gibt zwei Wege um Verlinkungen zu erstellen.

```no-highlight
[Ich bin ein Link im Inline-Stil](https://www.google.com)

[Ich bin ein Link im Inline-Stil mit Titel](https://www.google.com "Google's Homepage")

[Ich bin ein Link im Verweisstil][Beliebiger Verweistext ohne Berücksichtigung der Groß-/Kleinschreibung]

[Ich bin ein relativer Verweis auf eine Repository-Datei](../blob/master/LICENSE)

[Ich bin ein Verweis auf eine Überschrift im Dokument](#bilder)

[Sie können Zahlen für referenzähnliche Linkdefinitionen verwenden][1]

Oder lassen Sie es leer und verwenden Sie den [Linktext selbst].

URLs und URLs in spitzen Klammern werden automatisch in Links umgewandelt. 
http://www.example.com oder <http://www.example.com> und manchmal 
example.com (aber nicht auf Github, zum Beispiel).

Etwas Text, um zu zeigen, dass die Referenzlinks später folgen können.

[Beliebiger Verweistext ohne Berücksichtigung der Groß-/Kleinschreibung]: https://www.mozilla.org
[1]: http://slashdot.org
[Linktext selbst]: http://www.reddit.com
```

[Ich bin ein Link im Inline-Stil](https://www.google.com)

[Ich bin ein Link im Inline-Stil mit Titel](https://www.google.com "Google's Homepage")

[Ich bin ein Link im Verweisstil][Beliebiger Verweistext ohne Berücksichtigung der Groß-/Kleinschreibung]

[Ich bin ein relativer Verweis auf eine Repository-Datei](../blob/master/LICENSE)

[Ich bin ein Verweis auf eine Überschrift im Dokument](#bilder)

[Sie können Zahlen für referenzähnliche Linkdefinitionen verwenden][1]

Oder lassen Sie es leer und verwenden Sie den [Linktext selbst].

URLs und URLs in spitzen Klammern (`< >`) werden automatisch in Links umgewandelt. 
http://www.example.com oder <http://www.example.com> und manchmal 
example.com (aber nicht auf Github, zum Beispiel).

Etwas Text, um zu zeigen, dass die Referenzlinks später folgen können.

[Beliebiger Verweistext ohne Berücksichtigung der Groß-/Kleinschreibung]: https://www.mozilla.org
[1]: http://slashdot.org
[Linktext selbst]: http://www.reddit.com

## Bilder

```no-highlight
Hier ist das PxC-Logo (Über das Logo hovern um den Titel anzuzeigen):

Inline-style: 
![alt text](/assets/img/logo.svg "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: /assets/img/logo.svg "Logo Title Text 2"
```

Hier ist das PxC-Logo (Über das Logo hovern um den Titel anzuzeigen):

Inline-style: 
![alt text](/assets/img/logo.svg "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: /assets/img/logo.svg "Logo Title Text 2"


Um Bilder in eine Admonition einzufügen kann diese Syntax einfach in den Admonition Block eingerückt werden:

```
!!! image 
    ![alt text](/assets/img/logo.svg "Logo Title Text 3")
```

!!! image 
    ![alt text](/assets/img/logo.svg "Logo Title Text 3")


## Code und Syntax Highlighting

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and *Markdown Here* -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. *Markdown Here* supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the [highlight.js demo page](http://softwaremaniacs.org/media/soft/highlight/test.html).

```no-highlight
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks <code>```</code>, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.


````
```javascript title="JavaScript Code"
var s = "JavaScript syntax highlighting";
alert(s);
```

```python title="Python Code"
s = "Python syntax highlighting"
print s
```
 
``` title="No Language Code"
No language indicated, so no syntax highlighting. 
But let's throw in a &lt;b&gt;tag&lt;/b&gt;.
```
````

```javascript title="JavaScript Code"
var s = "JavaScript syntax highlighting";
alert(s);
```

```python title="Python Code"
s = "Python syntax highlighting"
print s
```

``` title="No Language Code"
No language indicated, so no syntax highlighting in Markdown Here (varies on Github). 
But let's throw in a <b>tag</b>.
```

## Footnotes

Footnotes aren't part of the core Markdown spec, but they [supported by GFM](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#footnotes).

```no-highlight
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.
```

Renders to:

![rendered footnotes](https://user-images.githubusercontent.com/425687/160298620-6046b90e-698c-43cb-8e00-5f5871a906ad.png)

## Tables

Tables aren't part of the core Markdown spec, but they are part of GFM and *Markdown Here* supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

```no-highlight
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3
```

Colons can be used to align columns.

| Tables        | Are           | Cool |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## Blockquotes

```no-highlight
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. 

## Inline HTML

You can also use raw HTML in your Markdown, and it'll mostly work pretty well. 

```no-highlight
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks

My basic recommendation for learning how line breaks work is to experiment and discover -- hit &lt;Enter&gt; once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend. 

Here are some things to try out:

```
Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.
```

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also begins a separate paragraph, but...  
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

(Technical note: *Markdown Here* uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

## YouTube Videos

They can't be added directly but you can add an image with a link to the video like this:

```no-highlight
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

Or, in pure Markdown, but losing the image sizing and border:

```no-highlight
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```
$('#table').DataTable( {
    paging: false,
} );

// Funktion zum Ersetzen der :lordicon-Notation durch HTML-Elemente
function replaceLordiconNotation() {
    // Finde alle <p>-Elemente im Dokument, die die :lordicon-Notation enthalten
    var pElementsWithLordiconNotation = document.querySelectorAll('p:contains(":lordicon")');

    pElementsWithLordiconNotation.forEach(function(element) {
        // Ersetze das :lordicon-Element durch das entsprechende HTML
        var lordiconName = element.textContent.trim().replace(':lordicon-', ''); // Extrahiere den Namen des Lordicons
        var lordiconHtml = '<lord-icon src="https://cdn.lordicon.com/' + lordiconName + '.json" trigger="hover" style="width:250px;height:250px"></lord-icon>';
        element.innerHTML = lordiconHtml;
    });
}

// Führe die Funktion zum Ersetzen der :lordicon-Notation aus, wenn das Dokument geladen ist
document.addEventListener("DOMContentLoaded", function() {
    replaceLordiconNotation();
});

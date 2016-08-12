$(document).ready(function () {
    var htmlEditor = document.getElementById("htmlEditor");
    var htmlPreview = document.getElementById("htmlPreview");
    var previewButton = document.getElementById("previewButton");
    var saveButton = document.getElementById("saveButton");

    function improveContent(container) {
        linker.getLinks(container, createLink, done);

        function createLink(link) {

            var word = link.word;
            var results = link.results;

            if (word === "") {
                return;
            }

            if (results.length === 0) {
                return;
            }

            var result = results[0];

            try {
                var regex = RegExp(word, 'gi');
            } catch (e) {
                console.error("Invalid regex: " + e);
                return;
            }

            findAndReplaceDOMText(container, { // Defined in lib/jquery/plugins/jquery.ba-replacetext.min.js
                find: regex,
                replace: function (portion, match) {

                    var span = document.createElement('span');
                    span.innerHTML = portion.text;

                    var img = document.createElement('img');
                    img.src = linker.baseURL + result.thumbnail_url;

                    span.appendChild(img);

                    return span;
                },
                forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
            });
        }

        function done() {
            console.log("Finito!");
        }
    }

    previewButton.onclick = function() {
        htmlPreview.innerHTML = htmlEditor.value;
        improveContent(htmlPreview);
    };
});
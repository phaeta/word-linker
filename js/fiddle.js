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
            var linkCount = 0;

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
                    // TODO: highlight words
                    // TODO: separate word from image
                    // TODO: embed

                    var span = document.createElement('span');
                    span.innerHTML = portion.text;
                    span.className = 'highlight';

                    var img = document.createElement('img');
                    img.src = linker.baseURL + result.thumbnail_url;

                    span.appendChild(img);
                    img.width = "200";

                    if (linkCount % 2 == 0) {
                        img.className = 'fl_right';
                    } else {
                        img.className = 'fl_left';
                    }
                    linkCount += 1;

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
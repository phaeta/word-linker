$(document).ready(function () {
    var htmlEditor = document.getElementById("htmlEditor");
    var htmlPreview = document.getElementById("htmlPreview");
    var previewButton = document.getElementById("previewButton");
    var saveButton = document.getElementById("saveButton");
    var linkCount = 0;

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
                    // TODO: separate word from image
                    // TODO: embed

                    var span = document.createElement('span');
                    span.innerHTML = portion.text;
                    span.className = 'highlight';

                    //var img = document.createElement('img');
                    //img.src = linker.baseURL + result.thumbnail_url;

                    //span.appendChild(img);
                    //img.width = "200";

                    // ui hack for thumbnail awesomeness - extremely brittle
                    function fixURL(url) {
                        var regex = new RegExp("production/maleAdult/(.+).json");
                        return url.replace(regex, "$1");
                    }

                    var iframe = document.createElement('iframe');
                    iframe.src = linker.baseURL + fixURL(result.embed_url) + "&ui-nav=false&ui-share=false&ui-info=false";
                    iframe.width = "200";
                    iframe.height = "200";

                    if (linkCount % 2 == 0) {
                        iframe.className = 'fl_right';
                    } else {
                        iframe.className = 'fl_left';
                    }
                    linkCount += 1;

                    span.appendChild(iframe);
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
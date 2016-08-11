(function () {

    "use strict";

    // Build map of words that we don't want to link

    var stopWordsList = ["a", "able", "about", "across", "after", "all", "almost", "also", "am", "among", "an", "and",
        "any", "are", "as", "at", "be", "because", "been", "but", "by", "can", "cannot", "could", "dear", "did", "do",
        "does", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "have", "he", "her", "hers",
        "him", "his", "how", "however", "i", "if", "in", "into", "is", "it", "its", "just", "least", "let", "like", "likely",
        "may", "me", "might", "most", "must", "my", "neither", "no", "nor", "not", "of", "off", "often", "on", "only", "or",
        "other", "our", "own", "rather", "said", "say", "says", "she", "should", "since", "so", "some", "than", "that",
        "the", "their", "them", "then", "there", "these", "they", "this", "tis", "to", "too", "twas", "us", "wants",
        "was", "we", "were", "what", "when", "where", "which", "while", "who", "whom", "why", "will", "with", "would",
        "yet", "you", "your", "ain't", "aren't", "can't", "could've", "couldn't", "didn't", "doesn't", "don't",
        "hasn't", "he'd", "he'll", "he's", "how'd", "how'll", "how's", "i'd", "i'll", "i'm", "i've", "isn't", "it's",
        "might've", "mightn't", "must've", "mustn't", "shan't", "she'd", "she'll", "she's", "should've", "shouldn't",
        "that'll", "that's", "there's", "they'd", "they'll", "they're", "they've", "wasn't", "we'd", "we'll", "we're",
        "weren't", "what'd", "what's", "when'd", "when'll", "when's", "where'd", "where'll", "where's", "who'd", "who'll",
        "who's", "why'd", "why'll", "why's", "won't", "would've", "wouldn't", "you'd", "you'll", "you're", "you've"];

    var stopWordsMap = {};

    for (var i = 0, len = stopWordsList.length; i < len; i++) {
        stopWordsMap[stopWordsList[i].trim()] = true;
    }

    /**
     * Within all text within a given DOM element, creates a link for each word that
     * corresponds to content in the Human content database.
     */
    window.linker = new (function () {

        /**
         * Create links for recognized words within a DOM element.
         *
         * @param container The DOM element.
         * @param baseURL Base URL for each link.
         * @param ok Completion callback.
         * @returns {*}
         */
        this.createLinks = function (container, baseURL, ok) {

            var words = findWords(container);

            if (words.length === 0) {
                ok();
                return;
            }

            getLinks(words, function (links) {
                linkWords(container, baseURL, links);
                ok();
            });

            return this;
        };
    })();

    function findWords(container) { // Finds keywords within an element

        // Get the words

        var wordsList = $("#" + container.id + " *").contents().map(function () {
            if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype text and ignore empty text nodes
                return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
        }).get(); //get the array of words.

        // Filter out duplicates and "stop words"

        var word;
        var map = {};
        var words = [];

        for (var i = 0, len = wordsList.length; i < len; i++) {
            word = wordsList[i];
            if (!map[word] && !stopWordsMap[word]) {
                map[word] = word;
                words.push(word);
            }
        }

        return words;
    }

    function getLinks(words, ok) { // Queries server for links corresponding to keywords

        console.log("Querying content for " + words.length + " words");

        var word;
        var link;
        var links = [];

        for (var i = 0, len = words.length; i < len; i++) {

            word = words[i];

            if (Math.random() < 0.5) {
                continue;
            }

            link = {
                word: word
            };

            if (Math.random() < 0.5) {
                link.moduleId = word;
            } else {
                link.objectId = word;
            }

            links.push(link);
        }

        ok(links);
    }

    function linkWords(container, baseURL, links) { // Inserts links into the page

        console.log("Creating links for " + links.length + " words");

        for (var i = 0, len = links.length; i < len; i++) {
            linkWord(container, baseURL, links[i]);
        }
    }

    function linkWord(container, baseURL, link) { // Inserts a link into the page

        if (link.word === "") {
            return;
        }

        try {
            var regex = RegExp(link.word, 'gi');
        } catch (e) {
            console.error("Invalid regex: " + e);
            return;
        }

        findAndReplaceDOMText(container, { // Defined in lib/jquery/plugins/jquery.ba-replacetext.min.js
            find: regex,
            replace: function (portion, match) {
                var el = document.createElement('a');
                if (link.moduleId) {
                    el.href = baseURL + "?moduleId=" + link.moduleId;
                    el.style.backgroundColor = "red";
                } else if (link.objectId) {
                    el.href = baseURL + "?objectId=" + link.objectId;
                    el.style.backgroundColor = "green";
                }
                el.innerHTML = portion.text;
                return el;
            },
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
        });
    }

})();

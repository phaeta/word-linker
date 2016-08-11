(function () {

    "use strict";

    // Build map of words that we DO want to link

    var keywordsList = [
        'eye',
        'male',
        'foot',
        'lung',
        'cell',
        'knee',
        'pain',
        'bone',
        'lungs',
        'valve',
        'acute',
        'small',
        'heart',
        'stage',
        'cross',
        'brain',
        'liver',
        'blood',
        'nerve',
        'throat',
        'female',
        'breast',
        'detail',
        'artery',
        'cancer',
        'kidney',
        'spinal',
        'tissue',
        'system',
        'surgery',
        'disease',
        'colonic',
        'stomach',
        'anatomy',
        'chronic',
        'insulin',
        'beating',
        'section',
        'thyroid',
        'failure',
        'colitis',
        'diabetes',
        'syndrome',
        'skeletal',
        'injuries',
        'diabetic',
        'muscular',
        'diseases',
        'prostate',
        'leukemia',
        'pulmonary',
        'disorders',
        'esophagus',
        'hepatitis',
        'arthritis',
        'breathing',
        'bronchitis',
        'infections',
        'esophageal',
        'peripheral',
        'gallbladder',
        'reproductive',
        'aspergilloma',
        'osteomyelitis',
        'transplantation'
    ];


    var keywords = {};

    for (var i = 0, len = keywordsList.length; i < len; i++) {
        keywords[keywordsList[i].trim()] = true;
    }

    var baseURL = "https://human.biodigital.com";

    /**
     * Within all text within a given DOM element, creates a link for each word that
     * corresponds to content in the Human content database.
     */
    window.linker = new (function () {


        /**
         * Create links for recognized words within a DOM element.
         *
         * @param container The DOM element.
         * @returns {*}
         */
        this.createLinks = function (container) {

            this.getLinks(container,
                function (link) {
                    createLink(container, link);
                });
        };

        /**
         * Create links for recognized words within a DOM element.
         *
         * @param container The DOM element.
         * @param callback Callback fired for each link found
         */
        this.getLinks = function (container, callback) {

            var words = findWords(container);

            if (words.length === 0) {
                return false;
            }

            queryWords(words, callback);
        };
    })();

    function findWords(container) { // Finds keywords within an element

        // Get the words

        var wordsList = $("#" + container.id + " *").contents().map(function () {
            if (this.nodeType == 3 && this.nodeValue.trim() != "") //check for nodetype text and ignore empty text nodes
                return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
        }).get(); //get the array of words.

        // Find recognized keywords and their usage counts

        var word;
        var map = {};
        var item;
        var words = [];

        for (var i = 0, len = wordsList.length; i < len; i++) {
            word = wordsList[i];
            if (keywords[word]) {
                item = map[word];
                if (item) {
                    item.count++;
                } else {
                    item = {word: word, count: 1};
                    map[word] = item;
                    words.push(item);
                }
            }
        }

        return words;
    }

    function queryWords(words, callback) {
        for (var i = 0, len = words.length; i < len; i++) {
            queryWord(words[i], callback);
        }
    }

    function queryWord(item, callback) {

        var word = item.word;
        var count = item.count;

        $.getJSON(baseURL + "/search/conditions?q=" + word,
            function (data) {

                callback({
                    word: word,
                    count: count,
                    results: data.results
                });
            });
    }

    function createLink(container, link) {

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
                img.src = baseURL + result.thumbnail_url;

                span.appendChild(img);

                return span;
            },
            forceContext: findAndReplaceDOMText.NON_INLINE_PROSE
        });
    }

})();

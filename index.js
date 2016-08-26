'use strict';

;
(function() {
    var MIN_SENTENCES = 3;
    var MAX_SENTENCES = 5;
    var MIN_WORDS_PER_SENTENCE = 8;
    var MAX_WORDS_PER_SENTENCE = 20;
    var WORDS = ['Starchup', 'pressed for time', 'socks', 'routes', 'on demand', 'to your doorstep', 'wash \'n fold', 'iron out the details',
        'stain-free', 'eco-friendly', 'starch', 'scent', 'detergent', 'press', 'dry clean', 'collar', 'suit', 'shirt', 'skirt',
        'cotton', 'blend', 'fabric', 'pickup', 'delivery', 'millenials', 'app', 'download', 'special instructions', 'racks', 'loads', 'loads on racks',
        'Geo', 'Nick', 'Dan', 'Eric', 'Rachel', 'Rob', 'James', 'grow your business', 'with', 'to', 'the', 'and', 'from', 'between', 'spin cycle', 'spin \'n span',
        'warm', 'cold', 'hot', 'tumble dry', 'gentle', 'delicate', 'wool', 'at your convenience', 'marketing', 'we\'ll build you a website',
        'customer engagement', 'my chest bumps like a dryer with shoes in it', 'in store', 'cross channel', 'POS', 'but', 'yes', 'because', 'when',
        'ties', 'belts', 'leather goods', 'accessories', 'rugs', 'dashboard', 'washer', 'dryer', 'in-unit', 'laundromat', 'love',
        'the tides have turned', 'quarters', 'Mike', 'laundry', 'basket', 'missing sock', 'lint', 'lint trap', 'pants', 'jeans', 'shorts',
        'everyone is named Mike', 'how can there be so many Mikes', 'front-loading', 'top-loading', 'liquid detergent', 'clean', 'dirty', 'laundry puns',
        'starch raving mad', 'words', 'start', 'permanent press', 'time dry', 'fold'
    ];


    init();


    function init() {
        document.getElementById('go').addEventListener('click', tumbleDry, false);
    }

    function tumbleDry() {
        var output = document.getElementById('output');
        output.innerHTML = '';
        var delim = '&nbsp;&nbsp;&nbsp;&nbsp;';
        var numParagraphs = parseInt(document.getElementById('paragraphs').value);
        var numSentences;
        var pCount = 0;
        var p;
        var text = document.getElementById('outpout');
        if (!numParagraphs) {
            p = document.createElement('p');
            p.innerHTML = foldWords(wordsPerSentence());
            output.appendChild(p);

        } else {
            while (pCount < numParagraphs) {
                var pgraph = delim;
                numSentences = sentencesPerParagraph();
                for (var i = 0; i < numSentences; i++) {
                    pgraph += foldWords(wordsPerSentence());
                }
                p = document.createElement('p');
                p.innerHTML = pgraph;
                output.appendChild(p);
                pCount++;
            }

        }
    }


    function foldWords(numWords) {
        var sentence = '';
        var delim = ' ';
        var count = 0;
        var usedWords = [];

        while (count < numWords) {
            var word = randomWord();
            if (usedWords.indexOf(word) < 0) {
                usedWords.push(word);
                sentence += word;
                if (count !== numWords - 1) sentence += delim;
                count++;
            }
        }
        return sentence[0].toUpperCase() + sentence.slice(1) + punctuate();
    }

    function randomWord() {
        var min = 0;
        var max = WORDS.length - 1;

        var randomInt = Math.floor(Math.random() * (max - min + 1) + min);
        return WORDS[randomInt];
    }


    function sentencesPerParagraph() {
        return Math.floor(Math.random() * (MAX_SENTENCES - MIN_SENTENCES + 1) + MIN_SENTENCES);
    }

    function wordsPerSentence() {
        return Math.floor(Math.random() * (MAX_WORDS_PER_SENTENCE - MIN_WORDS_PER_SENTENCE + 1) + MIN_WORDS_PER_SENTENCE);
    }


    function punctuate() {
        var puncs = {
            '. ': [0, 8],
            '! ': [9, 10]
        };
        var randomInt = Math.floor(Math.random() * 10 + 1);

        console.log(randomInt);

        for (var mark in puncs) {
            var min = puncs[mark][0];
            var max = puncs[mark][1];
            if (randomInt >= min && randomInt <= max) return mark;
        }
    }


})();
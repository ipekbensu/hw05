var mitcourses = require('./mitcourses');
var getTitles = require('./large-getTitles');
var getWords = require('./large-getWords');
var getWordsFlat = require('./large-getWordsFlat');
var getScores = require('./large-getScores');

var titles = getTitles(mitcourses); // done
console.log(titles);

var words = getWords(titles); // done
console.log(words);

var wordsFlat = getWordsFlat(words); // done
console.log(wordsFlat);

var scores = getScores(wordsFlat); // done
console.log(scores);
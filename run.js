var mitcourses = require('./mitcourses_small');
var getTitles = require('./getTitles');
var getWords = require('./getWords');
var getWordsFlat = require('./getWordsFlat');
var getScores = require('./getScores');

var titles = getTitles(mitcourses); // done
console.log(titles);

var words = getWords(titles); // done
console.log(words);

var wordsFlat = getWordsFlat(words); // done
console.log(wordsFlat);

var scores = getScores(wordsFlat); // done
console.log(scores);
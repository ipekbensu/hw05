var getWordsFlat = function(words){
	var wordsFlat = [];

	// combine sublists
	words.forEach(function(item){
		item.forEach(function(subItem){
			wordsFlat.push(subItem);
		});
	});

	return wordsFlat;
};

module.exports = getWordsFlat;
var getWords = function(titles){
	var words = [];

	// list words
	titles.forEach(function(item, index){
		words.push([]);
		var list = item;
		list = list.toLowerCase();
		list = list.replace('.', '');
		list = list.replace(/[0-9]/gi, '');
		list = list.split(' ');
		for(var i=1; i<list.length; i++){ // remove '' as first element
			words[index].push(list[i]);
		};
	});

	return words;
};

module.exports = getWords;
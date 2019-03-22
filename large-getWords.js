var getWords = function(titles){
	var words = [];

	// list words
	titles.forEach(function(item, index){
		words.push([]);
		var list = item;
		list = list.toLowerCase();
		list = list.replace(/\W/g, ' '); // remove non-alphanumeric
		list = list.replace(/[0-9]/g, ' '); // remove numbers
		list = list.replace(/(\b(\w{1,3})\b(\s|$))/g, ' '); // remove 0-3 character words
		list = list.replace(/\s+/g, ' '); // compact spaces
		list = list.trim();
		list = list.split(' ');
		for(var i=1; i<list.length; i++){ // remove '' as first element
			words[index].push(list[i]);
		};
	});

	return words;
};

module.exports = getWords;
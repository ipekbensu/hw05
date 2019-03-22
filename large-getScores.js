var getScores = function(wordsFlat){
	var scores = {};
	
	// count frequencies
	wordsFlat.forEach(function(item){
		if(item in scores){
			scores[item] += 1;
		}
		else{
			scores[item] = 1;
		}
	});

	return scores;
};

module.exports = getScores;
var getTitles = function(mitcourses){
	var titles = [];
	var list = mitcourses;
	
	// mark start of titles
	list = list.replace(/<h3>/gi, 'bensu');

	// mark end of titles
	list = list.replace(/<br><img alt=______ src=\/icns\/hr.gif><\/h3>/gi, 'bensu');
	
	// split into courses
	list = list.split('<!--end-->');

	// extract titles
	list.forEach(function(item, index){
		list[index] = item.trim();
		list[index] = item.split('bensu');
		list[index].forEach(function(subItem, subIndex){
			list[index][subIndex] = subItem.trim();
		});
		titles.push(list[index][1]);
	});
	titles.pop(); // remove '' as last element

	return titles;
};

module.exports = getTitles;
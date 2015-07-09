var ul = e('ul');
document.body.appendChild(ul);

var movies = [
    ["titanic", 19, 1989],
    ["mean girls", 90, 200],
    ["stuff", 50, 1980]
];

function objCreator(name, min, year) {

    var newObject = {
        title: name,
        time: min,
        year: year
    };

    return newObject;
}


var movieObj = [];

for(var i = 0; i < movies.length; i++){
    var movie = movies[i];
    movieObj.push(objCreator.apply({}, movie));

}


for (var i = 0; i < movieObj.length; i++){
    var movie =  movieObj[i];
    var li = e('li', movie.title);
  ul.appendChild(li);
}

function e(elementType, text, attributes, styles) {
	var element = document.createElement(elementType);
	element.textContent = text || "";

	for (var attr in attributes) {
		if(attributes.hasOwnProperty(attr)) {
			element.setAttribute(attr, attributes[attr]);
		}
	}

	for(var style in styles) {
		if (styles.hasOwnProperty(style)) {
			element.style[style] = styles[style];
		}
	}

	return element;
}





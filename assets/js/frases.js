// importing the quotes from file
function quotesfromfile() {
// importing file with quotes
	return fetch("quotes_es.txt")
		.then((res) => res.text())
		.then((text) => {
			// create an array from the text file separating on new lines
			var textArray = text.split('\n');
			return textArray;
		})
	.catch((e) => console.error(e));
}

// getting a random quote
function randomquote() { quotesfromfile().then(textArray => {
	// the array with the quotes
	const quotes = textArray;
	// not proud
	const quoteslength = textArray.length - 1;
	// get a random quote from the array
	var quote = quotes[Math.floor(Math.random()*quoteslength)];
	// insert it into the page
	document.getElementsByClassName('framed')[0].innerHTML = quote;
	//return quote;
	});
}

// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// quote on load
	randomquote();
	// show the div for the first time
	document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 1");
	// monitor the div for clicks
	document.getElementsByClassName('framed')[0].addEventListener('click', function() {
		// change the quote
		randomquote();
	});
});

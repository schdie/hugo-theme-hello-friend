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
	// declare quote
	let quote;

	function loopQuote() {
		// get a random quote from the array
		quote = quotes[Math.floor(Math.random()*quoteslength)];
		// insert it into the page
		document.getElementsByClassName('framed')[0].innerHTML = quote;
		document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 1");
		// the css animation is 1 sec, ~3900 is probably safer
		setTimeout(function(){
			document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 0");
		},4000);
   // and schedule a repeat
   setTimeout(loopQuote, 5000);
	}
	// automagically loop through the quotes
	loopQuote();
	});
}

// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// quote on load
	randomquote();
});

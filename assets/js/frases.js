// retrieve a line of text from a file
function quoteofday() {
// importing file with quotes
	return fetch("quotes_es.txt")
		.then((res) => res.text())
		.then((text) => {
			// create an array from the text file separating on new lines
			var textArray = text.split('\n');
			// not the pretiest
			let textArrayLength = textArray.length - 1
			// get a random item from the array
			var quote = textArray[Math.floor(Math.random()*textArrayLength)];
			return quote;
			// let's add an ID for better control
			//document.getElementsByClassName('framed')[0].id="quoteofday";
		})
	.catch((e) => console.error(e));
}

// add the first quote
quoteofday().then(quote => {
	document.getElementsByClassName('framed')[0].innerHTML = quote;
});

// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// make the framed div visible
	document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 1");
	// monitor the div for clicks
	document.getElementsByClassName('framed')[0].addEventListener('click', function() {
		quoteofday().then(quote => {
			// change the quote on every click
			document.getElementsByClassName('framed')[0].innerHTML = quote;
		});
	});
});

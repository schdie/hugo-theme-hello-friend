document.addEventListener("DOMContentLoaded", function(){
// importing quotes
	fetch("frases.txt")
		.then((res) => res.text())
		.then((text) => {
			// create an array from the text file separating new lines
			var textArray = text.split('\n');
			// get a random item from the array
			let textArrayLength = textArray.length - 1
			var quote = textArray[Math.floor(Math.random()*textArrayLength)];
			// replace the quote
			document.getElementsByClassName('framed')[0].innerHTML = quote;
		})
	.catch((e) => console.error(e));
});

document.addEventListener("DOMContentLoaded", function(){
// importing quotes
	fetch("quotes_es.txt")
		.then((res) => res.text())
		.then((text) => {
			// create an array from the text file separating new lines
			var textArray = text.split('\n');
			// not the pretiest
			let textArrayLength = textArray.length - 1
			// get a random item from the array
			var quote = textArray[Math.floor(Math.random()*textArrayLength)];
			// let's add an ID for better control
			document.getElementsByClassName('framed')[0].id="quoteofday";
			// replace the quote
			document.getElementsByClassName('framed')[0].innerHTML = quote;
			// fancy
			document.getElementById('quoteofday').setAttribute("style", "opacity: 1");
			console.log(textArray);
		})
	.catch((e) => console.error(e));


});

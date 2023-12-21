// importing the quotes from file
function quotesfromfile() {
// importing file with quotes
	return fetch("quotes_es.txt")
		.then((res) => res.text())
		.then((text) => {
			// create an array from the text file separating on new lines
			let textArray = text.split('\n');
			return textArray;
		});
}

// randomize quotes in the array
function randomizequotes() { return quotesfromfile().then(textArray => {
	// save the first item
	let fQuote = textArray[0];
	// temporarily remove the first item
	textArray.shift();
	// remove the last empty item
	let tArrayRand = textArray.slice(0, -1);
	// randomization
	for (let i = tArrayRand.length - 1; i > 0; i--) {
		const rand = Math.floor(Math.random() * (i + 1));
		[tArrayRand[i], tArrayRand[rand]] = [tArrayRand[rand], tArrayRand[i]];
  }
  // re-insert the first item at the beggining of the array
  tArrayRand.unshift(fQuote);
	// return the quotes randomized 
	return tArrayRand;
	});
}

// lets cycle through each quote on the framed div
function showquotes() {
	// recover the randomized quotes array
	const rQuotesArray = randomizequotes();
	// rQAresolved is the resolved promise
	rQuotesArray.then(function (rQAresolved){
		// set a counter
		let qCounter = 0;
		// logic
		function delayedQuotes() {
			// get the current quote and move the counter
			document.getElementsByClassName('framed')[0].innerHTML = rQAresolved[qCounter];
			document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 1");
			qCounter++;

			// pause for 4000 ms, quote is shown for 2900ms because the CSS animation is 1000ms, there's 100ms of "buffer"
			if (qCounter < (rQAresolved.length)) {
				if (qCounter !== 1) {
					// a delay inside a delay for the CSS animation
					setTimeout(function(){
						document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 0");
					},2900);
					// restart logic				
					setTimeout(delayedQuotes, 4000);
				} else { // only for the first quote
					// a delay inside a delay for the CSS animation
					setTimeout(function(){
						document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 0");
					},6700);
					// restart logic
					setTimeout(delayedQuotes, 8000);
				}
			} else {
				// set the counter to zero for the cycle should repeat indefinitely
				qCounter = 0;
				// a delay inside a delay for the CSS animation
				setTimeout(function(){
					document.getElementsByClassName('framed')[0].setAttribute("style", "opacity: 0");
				},2900);
				// restart logic from the zero
				setTimeout(delayedQuotes, 4000);	
			}
		}
		// first call
		delayedQuotes(); 
	});
}

// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// only ask for quotes on the main page
	if (location.pathname == "/") {
		showquotes();
	}
});

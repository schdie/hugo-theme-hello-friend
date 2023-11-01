document.addEventListener("DOMContentLoaded", function(){
  // importing quotes
  fetch("frases.txt")
    .then((res) => res.text())
	.then((text) => {
	  // create an array from the text file separating on new lines
      var textArray = text.split('\n');
      // get a random item from the array
	  var quote = textArray[Math.floor(Math.random()*textArray.length)];
	  // replace the quote
      document.getElementsByClassName('framed')[0].innerHTML = quote;
    })
  .catch((e) => console.error(e));
});

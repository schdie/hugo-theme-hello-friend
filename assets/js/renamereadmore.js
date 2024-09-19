// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// get all of posts
	let posts = document.getElementsByClassName('post on-list');
	// loop through them
	for (let i = 0; i < posts.length; i++) {
		// get the tags
		let cpost = posts[i].getElementsByClassName('post-tags')[0];
		
		// find posts with the gallery tag only
		if (cpost.textContent.includes("#gallery")) {
			// change read more text
			posts[i].getElementsByClassName('read-more button')[0].textContent = "Gallery →";
			
			// change Written by to Photos by
			posts[i].getElementsByClassName('post-author')[0].innerText = posts[i].getElementsByClassName('post-author')[0].innerText.replace("Written", "Photos");
			
			// remove min read
			posts[i].getElementsByClassName('post-read-time')[0].innerText = posts[i].getElementsByClassName('post-read-time')[0].innerText = "";
		}
		
		// find posts with the castellano tag only
		if (cpost.textContent.includes("#castellano")) {
			// change read more text
			posts[i].getElementsByClassName('read-more button')[0].textContent = "Leer más →";
			
			// change Written by to Escrito por
			posts[i].getElementsByClassName('post-author')[0].innerText = posts[i].getElementsByClassName('post-author')[0].innerText.replace("Written by", "Escrito por");
			
			// change date to spanish
			const spadate = { Monday: 'Lunes', Tuesday: 'Martes', Wednesday: 'Miércoles', Thursday: 'Jueves', Friday: 'Viernes', Saturday: 'Sábado', Sunday: 'Domingo', Jan: 'Ene', Apr: 'Abr', Aug: 'Ago', Dec: 'Dic' };
			const replaces = Object.keys(spadate).join('|');
			const celem = posts[i].getElementsByClassName('post-date')[0].innerText;
			const replacer = (celem) => spadate[celem];
			posts[i].getElementsByClassName('post-date')[0].innerText = celem.replace(new RegExp(replaces, 'gi'), replacer);
		}
	}
});

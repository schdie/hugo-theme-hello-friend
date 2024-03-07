// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// get all of posts
	let posts = document.getElementsByClassName('post on-list');
	// loop through them
	for (let i = 0; i < posts.length; i++) {
		// get only the tags
		let cpost = posts[i].getElementsByClassName('post-tags')[0];
		// find posts with the gallery tag only
		if (cpost.textContent.includes("#gallery")) {
			// change read more text
			posts[i].getElementsByClassName('read-more button')[0].textContent = "Gallery →";
		}
		// find posts with the castellano tag only
		if (cpost.textContent.includes("#castellano")) {
			// change read more text
			posts[i].getElementsByClassName('read-more button')[0].textContent = "Leer más →";
		}
	}
});

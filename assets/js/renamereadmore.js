// after most of the content was loaded
document.addEventListener("DOMContentLoaded", function(){
	// get all of posts
	let posts = document.getElementsByClassName('post on-list');
	// loop through them
	for (let i = 0; i < posts.length; i++) {
		// find posts with gallery tag only
		let cpost = posts[i].getElementsByClassName('post-tags')[0];
		if (cpost.textContent.includes("#gallery")) {
			// change read more text
			posts[i].getElementsByClassName('read-more button')[0].textContent = "Gallery →";
		}
	}
});

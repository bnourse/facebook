window.addEventListener("load", function (){

	commentInfos = document.getElementsByClassName("comment__info");
	for(i = 0; i < commentInfos.length; i++) {
		commentInfos[i].childNodes[1].addEventListener("click", likeClicked);
		commentInfos[i].childNodes[3].addEventListener("click", replyLinkClicked)
	}


});


function likeClicked() {
	likeCountString = this.parentNode.childNodes[5].textContent;
	likeCount = parseInt(likeCountString.split(" ")[0]);
	if (this.textContent == "Like") {
		this.textContent = "Unlike";
		likeCount += 1;
		this.parentNode.childNodes[5].textContent = likeCount + " likes";
	}
	else if (this.textContent == "Unlike") {
		this.textContent = "Like";
		likeCount -= 1;
		this.parentNode.childNodes[5].textContent = likeCount + " likes";
	}
}


function replyLinkClicked() {
	//toggle visibility of reply area
	if (this.parentNode.parentNode.childNodes[5].style.display == "none") {
		this.parentNode.parentNode.childNodes[5].style.display = "block";
	}
	else if (this.parentNode.parentNode.childNodes[5].style.display == "block") {
		this.parentNode.parentNode.childNodes[5].style.display = "none";
	}
}


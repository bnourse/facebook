window.addEventListener("load", function (){

	commentInfos = document.getElementsByClassName("comment__info");
	for(i = 0; i < commentInfos.length; i++) {
		commentInfos[i].childNodes[1].addEventListener("click", likeClicked);
		commentInfos[i].childNodes[3].addEventListener("click", replyLinkClicked)
	}

	mediaInfos = document.getElementsByClassName("media__info")
	for(i = 0; i < mediaInfos.length; i++) {
		mediaInfos[i].childNodes[1].addEventListener("click", nameLinkClicked);
	}

	modalClose = document.getElementsByClassName("modal__close")[0];
	modalClose.addEventListener("click", modalCloseClicked);

	modalBackground = document.getElementsByClassName("modal")[0];
	modalBackground.addEventListener("click", modalBackgroundClicked);
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

function nameLinkClicked() {
	document.getElementsByClassName("modal")[0].style.display = "block";
}

function modalCloseClicked() {
	document.getElementsByClassName("modal")[0].style.display = "none";
}

function modalBackgroundClicked() {
	document.getElementsByClassName("modal")[0].style.display = "none";
}

function replyLinkClicked() {
	//toggle visibility of reply area
	if (this.parentNode.parentNode.childNodes[5] != null) {
		if (this.parentNode.parentNode.childNodes[5].style.display == "none") {
			this.parentNode.parentNode.childNodes[5].style.display = "block";
		}
		else if (this.parentNode.parentNode.childNodes[5].style.display == "block") {
			this.parentNode.parentNode.childNodes[5].style.display = "none";
		}
	}
	else {
		//reply area doesn't currently exist, do what?
	}
}


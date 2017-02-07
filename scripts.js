window.addEventListener("load", function (){

	commentInfos = document.getElementsByClassName("comment__info");
	for(i = 0; i < commentInfos.length; i++) {
		commentInfos[i].childNodes[1].addEventListener("click", likeClicked);
		commentInfos[i].childNodes[3].addEventListener("click", replyLinkClicked)
	}

	mediaInfos = document.getElementsByClassName("media__info")
	for(i = 0; i < mediaInfos.length; i++) {
		//Make sure this is a name link, not a comment box
		aTags = mediaInfos[i].getElementsByTagName("a");
		if (aTags[0] != null) {
			//first element is an a tag containing Name
			aTags[0].addEventListener("click", nameLinkClicked);
		}
		else {
			//first element is the comment box, not sure if it's the text element or a wrapper around it
			replyForm = mediaInfos[i].getElementsByTagName("form")[0];
			if (replyForm != null) {
				replyForm.addEventListener("submit", replySubmitted);
			}
		}
	}

	modalClose = document.getElementsByClassName("modal__close")[0];
	modalClose.addEventListener("click", modalCloseClicked);

	modalBackground = document.getElementsByClassName("modal")[0];
	modalBackground.addEventListener("click", modalBackgroundClicked);

	postCommentLink = document.getElementsByClassName("action--comment")[0];
	postCommentLink.addEventListener("click", postCommentLinkClicked);
});

function postCommentLinkClicked() {
	document.getElementsByClassName("post__details")[0].childNodes[5].childNodes[3].childNodes[1].childNodes[1].focus()
}

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

function modalBackgroundClicked(e) {
	if (e.target == this) {
		document.getElementsByClassName("modal")[0].style.display = "none";
	}
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

function replySubmitted(e) {
	content = this.childNodes[1].value
	if(content.trim() == ""){
		alert("Can't submit an empty reply");
	}
	else {
		addReply(content);
		this.childNodes[1].value = "";
	}
	e.preventDefault();
}

function addReply(content) {
	
}
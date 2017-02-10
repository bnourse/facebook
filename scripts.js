window.addEventListener("load", function (){
	refreshListeners();	
});

function refreshListeners() {
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
}


function postCommentLinkClicked() {
	document.getElementsByClassName("post__details")[0].childNodes[5].childNodes[3].childNodes[1].childNodes[1].focus()
}

function likeClicked(e) {
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
	e.preventDefault();
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

function replyLinkClicked(e) {
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
	e.preventDefault();
}

function replySubmitted(e) {
	content = this.childNodes[1].value
	if(content.trim() == ""){
		alert("Can't submit an empty reply");
	}
	else {
		addReply(this, content);
		updateReplyCount(this);
		this.childNodes[1].value = "";
	}
	e.preventDefault();
}

function updateReplyCount(node) {
	var replyCountNode = node.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[3];
	if (replyCountNode.classList.contains("post__comments")) {
		//this is a post comment, not a comment reply
		var commentCountNode = node.parentElement.parentElement.parentElement.parentElement.childNodes[3].childNodes[1].childNodes[3]
		commentCountString = commentCountNode.textContent;
		var commentCount = parseInt(commentCountString.split(" ")[0]);
		commentCount += 1;
		commentCountNode.textContent = commentCount + " comments";
	}
	else {
		replyCountString = replyCountNode.textContent;
		if (replyCountString != "Reply") {
			replyCount = parseInt(replyCountString.split(" ")[0]);
			replyCount += 1;
			replyCountNode.textContent = replyCount + " replies";
		}
		else {
			replyCountNode.textContent = "1 reply";
		}
	}
	
}

function addReply(node, content) {
	var addPosition = node.parentNode.parentNode.parentNode;

	var commentMediaDiv = document.createElement("div");
	commentMediaDiv.setAttribute("class","comment media");

	var profilePhoto = document.createElement("img");
	profilePhoto.setAttribute("src","images/user.png");
	profilePhoto.setAttribute("class","profilePhoto");

	var mediaInfoDiv = document.createElement("div");
	mediaInfoDiv.setAttribute("class", "media__info");
	mediaInfoDivText = document.createTextNode(" " + content + " ");

	var nameA = document.createElement("a");
	nameA.setAttribute("href", "#");
	nameA.textContent = "Test Name";

	var commentInfoDiv = document.createElement("div");
	commentInfoDiv.setAttribute("class", "comment__info");
	commentInfoDivText = document.createTextNode("Yesterday at 10:01am");

	var likeA = document.createElement("a");
	likeA.setAttribute("href", "#");
	likeA.textContent = "Like";

	var replyA = document.createElement("a");
	replyA.setAttribute("href", "#");
	replyA.textContent = "Reply";

	var likeSpan = document.createElement("span");
	likeSpan.textContent = "0 likes "

	commentInfoDiv.appendChild(document.createTextNode(" "));
	commentInfoDiv.appendChild(likeA);
	commentInfoDiv.appendChild(document.createTextNode(" "));
	commentInfoDiv.appendChild(replyA);
	commentInfoDiv.appendChild(document.createTextNode(" "));
	commentInfoDiv.appendChild(likeSpan);
	commentInfoDiv.appendChild(commentInfoDivText);

	mediaInfoDiv.appendChild(document.createTextNode(" "));
	mediaInfoDiv.appendChild(nameA);
	mediaInfoDiv.appendChild(mediaInfoDivText);
	mediaInfoDiv.appendChild(commentInfoDiv);
	mediaInfoDiv.appendChild(document.createTextNode(" "));

	commentMediaDiv.appendChild(document.createTextNode(" "));
	commentMediaDiv.appendChild(profilePhoto);
	commentMediaDiv.appendChild(document.createTextNode(" "));
	commentMediaDiv.appendChild(mediaInfoDiv);
	commentMediaDiv.appendChild(document.createTextNode(" "));

	replyArea = addPosition.lastChild.previousSibling;
	addPosition.insertBefore(commentMediaDiv, replyArea);

	refreshListeners();
}


// <div class="comment media">
//   <img src="images/user.png" class="profilePhoto">

//   <div class="media__info">
//     <a href="#">Name 1</a>
//     Donec imperdiet sem leo, id rutrum risus aliquam vitae. Cras tincidunt porta mauris, vel feugiat mauris accumsan eget.

//     <div class="comment__info">
//       <a href="#">Like</a>
//       <a href="#">Reply</a>
//       <span>2 likes</span>
//       Yesterday at 10:00am
//     </div>
//   </div>
// </div>

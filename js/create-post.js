// append image to posts
function loadImageFileAsURL(x) {
		var filesSelected = document.getElementById("inputFileToLoad").files;
		if (filesSelected.length > 0)
		{
				var fileToLoad = filesSelected[0];

				if (fileToLoad.type.match("image.*"))
				{
						var fileReader = new FileReader();
						fileReader.onload = function(fileLoadedEvent)
						{
								var imageLoaded = document.createElement("img");
								imageLoaded.src = fileLoadedEvent.target.result;

								createPost(x, imageLoaded);

						};
						fileReader.readAsDataURL(fileToLoad);

				}
		}
}

// button click functionality ( adding image and title to post)
$(document).ready(function(){
		$(".btn").click(function(){

			var inputTextValue = document.getElementById("postText").value;
			var imageValue = document.getElementById("inputFileToLoad").value;

			if ( inputTextValue == "" && imageValue == "") {
				alert('Please enter data')
			} else if(imageValue==""){

				createPost(inputTextValue, imageValue);

			}else {
					loadImageFileAsURL(inputTextValue);
			}

			document.getElementById("postText").value = "";
			document.getElementById("inputFileToLoad").value = "";
			// document.getElementById("box span").value = "";
			$('.form-group span').text('');

		});
});

// creating post elements
function createPost (inputTextValue, imageLoaded) {

	var article = document.createElement('article');

	// creating post-header div and appeneding its elements
	var postHeader = document.createElement('div');
	postHeader.className = 'post-header clearfix';

	userImage = document.createElement("img");
	userImage.src = 'dist/img/user.png';
	h2 = document.createElement("h2");
	h2.textContent = 'user name';
	h3 = document.createElement("h3");
	h3.textContent = 'University of cambridge';
	date = document.createElement("p");
	date.textContent = '17 Min ago';
	icon = document.createElement("i");
	icon.className = 'fa fa-calendar' ;

	// append
	postHeader.appendChild(userImage);
	postHeader.appendChild(h2);
	postHeader.appendChild(h3);
	date.appendChild(icon);
	postHeader.appendChild(date);
	article.appendChild(postHeader);

	// creating post-conetnt div and appeneding its elements
	var postContent = document.createElement('div');
	postContent.className = 'post-content';

	contentHeader = document.createElement("h1");
	contentHeader.textContent = inputTextValue;

	postContent.appendChild(contentHeader);
	article.appendChild(postContent);

	// creating post-footer div and appeneding its elements

	var postFooter = document.createElement('div');
	postFooter.className = 'post-footer clearfix';

	// comment link
	commentLink = document.createElement("a");
	commentLink.textContent = 'Comment';
	commentLink.className = 'comment' ;
	commentLink.href = '#';
	commentIcon = document.createElement("i");
	commentIcon.className = 'fa fa-commenting' ;

	// like link
	likeLink = document.createElement("a");
	likeLink.textContent = 'like';
	likeLink.className = 'like' ;
	likeLink.href = '#';
	likeIcon = document.createElement("i");
	likeIcon.className = 'fa fa-smile-o' ;

	// read more link
	readMoreLink = document.createElement("a");
	readMoreLink.textContent = 'Read More';
	readMoreLink.className = 'more' ;
	readMoreLink.href = '#';
	readMoreIcon = document.createElement("i");
	readMoreIcon.textContent = '+';

	// append
	commentLink.appendChild(commentIcon);
	postFooter.appendChild(commentLink);
	likeLink.appendChild(likeIcon);
	postFooter.appendChild(likeLink);
	readMoreLink.appendChild(readMoreIcon);
	postFooter.appendChild(readMoreLink);
	article.appendChild(postFooter);


	// if image is not empty
	if (imageLoaded != "") {
			postContent.appendChild(imageLoaded);
	}

	article.className = 'single-post' ;
	$( "#newPosts" ).prepend( article );

}

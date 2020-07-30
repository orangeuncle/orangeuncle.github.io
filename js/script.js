/* 
WORK ON REDUCING THE LOAD TIME:
	Loader;
		Inline loader script
	--
	Arrow animation; 
		Substitute picture replacement with filter's invert property to make it black
		Substitute replacement with rotate property
		If possible reverse css animation
	--
*/



var rightArrow = document.getElementById("right_arrow");
var leftArrow = document.getElementById("left_arrow");
var boxAbout = document.getElementById("about");
var boxSiteTree = document.getElementById("site_tree");

//SIMPLE FUNCTION TO ANIMATE THE SLIDE I OF THE ABOUT PAGE
function openAbout(){
	// Runs this code if the arrow is clicked and about section is open
	if (boxAbout.style.width >= "1"){
		leftArrow.style.display = "block";
		rightArrow.style.float = "left";
		rightArrow.style.transform = "rotate(0)";
		rightArrow.style.filter = "invert(0)";
		boxAbout.style.width = "0";
	}
	// Runs this code if the arrow is clicked and about section is closed
	else {
		leftArrow.style.display = "none";
		rightArrow.style.float = "right";
		rightArrow.style.transform = "rotate(180deg)";
		rightArrow.style.filter = "invert(1)";
		boxAbout.style.width = "100vw";
	}
}


function siteTree(){
	if (boxSiteTree.style.width <= "1"){
		rightArrow.style.display = "none";
		leftArrow.style.float = "left";
		leftArrow.style.transform = "rotate(180deg)";
		leftArrow.style.filter = "invert(1)";
		boxSiteTree.style.width = "100%";
	}
	else {
		rightArrow.style.display = "block";
		leftArrow.style.float = "right";
		leftArrow.style.transform = "rotate(0)";
		leftArrow.style.filter = "invert(0)";
		boxSiteTree.style.width = "0";
	}
}


// when a button is clicked in the about section
function infoBtn(x){
	if (document.getElementById(x).nextElementSibling.style.height == "100vh"){
		document.getElementById(x).nextElementSibling.style.height = "0";
		document.getElementById(x).nextElementSibling.style.paddingTop = "0";
	}
	else {
		document.getElementById(x).nextElementSibling.style.height = "100vh";
		document.getElementById(x).nextElementSibling.style.paddingTop = "10%";
	}
}


rightArrow.addEventListener('click', openAbout, false);
document.getElementById('nav_one').addEventListener('click', openAbout, false);
document.getElementById('nav_two').addEventListener('click', openAbout, false);
document.getElementById('nav_two').addEventListener('click', infoBtn('projct_btn'), false);
leftArrow.addEventListener('click', siteTree, false);

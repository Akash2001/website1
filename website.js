document.addEventListener("DOMContentLoaded",
	function img1() {
		document.querySelector('#block4').style.backgroundColor="";
		document.querySelector('#block1').style.backgroundColor="red";
		document.querySelector('.img-main').src="images/j1.jpg";
		setTimeout(img2,3000);
	}

	);

function img1() {
		document.querySelector('#block4').style.backgroundColor="";
		document.querySelector('#block1').style.backgroundColor="red";
		document.querySelector('.img-main').src="images/j1.jpg";
		setTimeout(img2,3000);
	}

function img2() {
	document.querySelector('#block1').style.backgroundColor="";
	document.querySelector('#block2').style.backgroundColor="red";
	document.querySelector('.img-main').src="images/j2.jpg";
	setTimeout(img3,3000);
}
function img3() {
	document.querySelector('#block2').style.backgroundColor="";
	document.querySelector('#block3').style.backgroundColor="red";
	document.querySelector('.img-main').src="images/j3.jpg";
	setTimeout(img4,3000);
}
function img4() {
	document.querySelector('#block3').style.backgroundColor="";
	document.querySelector('#block4').style.backgroundColor="red";
	document.querySelector('.img-main').src="images/j4.jpg";
	setTimeout(img1,3000);
}
// Create a reference for the canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;
var img_numb;
var img_arr;
var img_other;
var img_spkey;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)) {
			//write a code to check the type of key pressed
		alphabetkey();
		document.getElementById("d1").innerHTML="You pressed [abc] key";
		console.log("[abc] key");
		}
		//write a code to check the type of key pressed
		else {
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		}
}

function alphabetkey()
{
	//upload respective image with the message. 
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_numb="numbkey.png";
	add();
}
function arrowkey()
{
	img_arr="Arrkey.png";
	add();
}
function specialkey()
{
	img_spkey="spkey.png";
	add();
}
function otherkey()
{
	img_other="otherkey.png";
	add();
}
	

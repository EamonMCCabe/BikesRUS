/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
} 

var mybutton = document.getElementById("Return_Top_Button");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function Return_To_Top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Changes bike picture and information according to which picture/slide the user clicks on.
function AdventureBike() {
	document.getElementById("ChosenBikeInfo").innerHTML = "This bike will satisfy your need on and off the raod.  It has low kilometers and is avaliable now for you to view.  Please call me of 555-5463 to book in a viewing or test ride.  If you have any questions please feel free to email me at email@gmail.com";
	document.getElementById("ChosenImage").src="Images/SaleAdventure.jpg";
	document.getElementById("ChosenHeading").innerHTML="All terrain adventure bike";
}

function SaleCruiser() {
	document.getElementById("ChosenBikeInfo").innerHTML = "My bike which I can no longer ride due to having a family is now up for sale.  It is in top condition and is full serviced. This is a regretful sale on my behalf but I haope the next owners enjoys her as much as I do.<br>  PH: 555-2309";
	document.getElementById("ChosenImage").src="Images/SaleCruiser.jpg";
	document.getElementById("ChosenHeading").innerHTML="Harley Davidson, Cruiser";
}

function SaleCustom() {
	document.getElementById("ChosenBikeInfo").innerHTML = "I am placing my fully custom 1100cc bike up for sale.  I am working on to many projects and I have completed this one so now I need room for the next.  Please email me for more details or to come around and see it.  Email: bob@gmail.com";
	document.getElementById("ChosenImage").src="Images/SaleCustom.jpg";
	document.getElementById("ChosenHeading").innerHTML="Custom 1100cc monster";
}

function SaleDirt() {
	document.getElementById("ChosenBikeInfo").innerHTML = "I have just purchased myself a new dirt bike so I need to sell my old one.  My bike has custom shocks, carby and exhaust.  It is only 2 years old and has been used a dozen times a year.  Perfect for anyone looking for thier first bike as it is very well looked after and never been dropped.  PH: 555-8756";
	document.getElementById("ChosenImage").src="Images/SaleDirt.jpg";
	document.getElementById("ChosenHeading").innerHTML="250cc Yamaha Dirt Bike";
}

function SaleOldSchool() {
	document.getElementById("ChosenBikeInfo").innerHTML = "Its come time for me to hag up my boots, so my vintage bike is going up for sale.  Unfortunaly due to an old injury I can no longer ride.  It is in very good condition and needs a little love from time to time.  all inquerys welcome.  PH: 555-8765 Email:reg@gmail.com";
	document.getElementById("ChosenImage").src="Images/SaleOldSchool.jpg";
	document.getElementById("ChosenHeading").innerHTML="Vintage Bike";
}


// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('Modal');
// the image in the modal
var modalImg = document.getElementById("img01");
//assign the caption text 
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
function PlayThanksSound() {
	document.getElementById('sound2').play();
}
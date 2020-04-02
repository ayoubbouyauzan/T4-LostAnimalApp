// JavaScript Document

function previewFile(){
  var preview = document.querySelector('img'); //selects the query named img
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } 
}

  previewFile();  //calls the function named previewFile()

/* BOOTSTRAP DROPDOWN MENU - Update selected item text and image */
$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    var imgSource = $(this).find('img').attr('src');
    var img = '<img src="' + imgSource + '"/>';        
    $(this).parents('.btn-group').find('.dropdown-toggle').html(img + ' ' + selText + ' <span class="caret"></span>');
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


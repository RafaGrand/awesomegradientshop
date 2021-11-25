document.addEventListener("DOMContentLoaded", function() {
  
  let sliderBackpacks = document.getElementById("slider_backpacks");
  var info = "";
  
  for(var cont=0; cont< productArr.length; cont++){
    info+="<img src='"+productArr[cont]['image']['src']+"'/>"+
          "<div class='content'>"+productArr[cont]['title']+"</div>";       
  }
  sliderBackpacks.innerHTML = info;
  
});
var slide_index = 1;  
displaySlides(slide_index);  

function nextSlide(n) {  
    displaySlides(slide_index += n);  
}  

function currentSlide(n) {  
    displaySlides(slide_index = n);  
}  

function displaySlides(n) {  
    var i;  
    var slides = document.getElementsByClassName("showSlide");  
    if (n > slides.length) { slide_index = 1 }  
    if (n < 1) { slide_index = slides.length }  
    for (i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[slide_index - 1].style.display = "block";  
} 

//let productArr = getJson(); // hello


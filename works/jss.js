 let searchbut;
  
 let change = () => {
     let x =2;
     let y =5;
     y += x;
     console.log(y);
      document.querySelector('.music').style.backgroundColor = "blue";
      //partyTimeButton.style.backgroundColor = "#0A8DAB";
    }
let searchh =document.querySelector('.searchbut');
 
  
    searchh.addEventListener.apply("click", change);
    /////////////////////////////////////////////////////////////////////////////////////////////

    let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

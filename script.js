const buttons = document.querySelectorAll(".buttons button");
const images = document.querySelectorAll(".image");

/* FILTER BUTTONS */

buttons.forEach(button => {

  button.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    const name = button.dataset.name;

    images.forEach(image => {

      const imageName = image.dataset.name;

      if(name === "all" || imageName === name){
        image.style.display = "block";
      }
      else{
        image.style.display = "none";
      }

    });

  });

});

/* LIGHTBOX */

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

const galleryImages = document.querySelectorAll(".image img");

/* OPEN IMAGE */

galleryImages.forEach((img, index) => {

  img.addEventListener("click", () => {

    currentIndex = index;

    showImage();

    lightbox.style.display = "flex";

  });

});

/* SHOW IMAGE */

function showImage(){

  lightboxImg.src = galleryImages[currentIndex].src;

}

/* NEXT BUTTON */

nextBtn.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= galleryImages.length){
    currentIndex = 0;
  }

  showImage();

});

/* PREV BUTTON */

prevBtn.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){
    currentIndex = galleryImages.length - 1;
  }

  showImage();

});

/* CLOSE BUTTON */

closeBtn.addEventListener("click", () => {

  lightbox.style.display = "none";

});

/* CLOSE WHEN CLICK OUTSIDE */

lightbox.addEventListener("click", (e) => {

  if(e.target === lightbox){
    lightbox.style.display = "none";
  }

});
/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e)=>{

  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";

});
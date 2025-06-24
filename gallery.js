const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const myImages = document.querySelectorAll(".images img");

myImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
  
  // Show next image
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % myImages.length;
    lightboxImg.src = myImages[currentIndex].src;
  });
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + myImages.length) % myImages.length;
    lightboxImg.src = myImages[currentIndex].src;
  });
 


const images = document.querySelectorAll(".gallery img");
// console.log(images);
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


images.forEach((image, index) => {
    image.addEventListener("click", () => {
        // console.log("clicked");
        modalImg.src = image.src;
        modal.classList.add("active");

        let currentImage = index;
        let nextImage = currentImage + 1;
        let prevImage = currentImage - 1;

        window.addEventListener("keyup", (e) => {
            if (nextImage >= images.length) {
                nextImage = 0
            }

            if (prevImage <= 0) {
                prevImage = images.length - 1;
            }

            if (e.key === "ArrowLeft") {
                modalImg.src = images[prevImage].src;
                prevImage--;
                nextImage = prevImage + 2;
            } else if (e.key === "ArrowRight") {
                modalImg.src = images[nextImage].src;
                nextImage++;
                prevImage = nextImage - 2;
            } else if (e.key = "Escape") {
                modal.classList.remove("active");
            }
        });

        prevBtn.addEventListener("click", () => {
            if (prevImage <= 0) {
                prevImage = images.length - 1;
            }

            modalImg.src = images[prevImage].src;
            prevImage--;
            nextImage = prevImage + 2;
        });

        nextBtn.addEventListener("click", () => {
            if (nextImage >= images.length) {
                nextImage = 0
            }
            
            modalImg.src = images[nextImage].src;
            nextImage++;
            prevImage = nextImage - 2;
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("active");
        })
    })
})
// const gallery = document.querySelector(".gallery");

const getImages = async () => {
    try {
        const response = await fetch("images.json");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Fetch Image", error);
    }
}

const handleImageFetch = async () => {
    try {
        const imageData = await getImages();
        displayImages(imageData);
    } catch (error) {
        console.error(error);
    }
};


const displayImages = (images) => {
    const gallery = document.querySelector(".gallery");

    images.forEach(image => {
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.setAttribute("src", `${image.src}`);
        img.setAttribute("alt", `${image.id}`);

        div.appendChild(img);
        // console.log(div);

        gallery.appendChild(div);

    });

    const galleryImages = document.querySelectorAll(".gallery img");
    // console.log(images);
    const modal = document.querySelector(".modal");
    const modalImg = document.querySelector(".modalImg");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");


    galleryImages.forEach((image, index) => {
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
}

handleImageFetch();








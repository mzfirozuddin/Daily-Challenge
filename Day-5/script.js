const gallery = document.querySelector(".gallery");

fetch("images.json")
.then((response) => response.json())
.then((images) => {
    images.forEach(image => {
        // const a = document.createElement("a");
        // a.setAttribute("href", `${image.src}`);
        // a.setAttribute("data-lightbox", "models");
        // a.setAttribute("data-title", `${image.id}`);
        // console.log(a);
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.setAttribute("src", `${image.src}`);
        img.setAttribute("alt", `${image.id}`);

        // a.appendChild(img);
        div.appendChild(img);
        // console.log(div);

        gallery.appendChild(div);

    });

});






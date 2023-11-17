const btn = document.querySelector("#btn");
const body = document.querySelector("body");

const randomColorGenerator = () => {
    const str = "0123456789ABCDEF";
    let color = "#"

    // random color generation
    for (let i = 0; i < 6; i++) {
        const num = Math.round(Math.random() * 16);
        color += str[num];   
    }
    // console.log(color);
    
    body.style.backgroundColor = color;
}

btn.addEventListener("click", randomColorGenerator);
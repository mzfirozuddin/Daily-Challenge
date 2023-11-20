
function toggelBg() {
    let toggelBtn = document.querySelector("#toggle");
    if (toggelBtn.checked) {
        document.querySelector(".container").style.backgroundColor = "#2b2929";
    } else {
        document.querySelector(".container").style.backgroundColor = "#f9f1f1";
    }
}

document.querySelector("#toggle").addEventListener("click", toggelBg)




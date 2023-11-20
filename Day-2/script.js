let clock = document.querySelector(".clock");


setInterval(() => {
    let currentTime = new Date().toLocaleTimeString();
    // console.log(currentTime);
    clock.innerHTML = currentTime;
}, 1000);
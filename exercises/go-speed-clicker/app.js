let isChangeable = true;
document.getElementById("clicks").innerHTML = localStorage.clicks;

setTimeout(() => {
    isChangeable = false;
}, 30000);

window.addEventListener("click", () => {
    if (isChangeable) {
        if (localStorage.clicks === undefined) {
            localStorage.clicks = 1;
        } else {
            localStorage.clicks++;
        }
        document.getElementById("clicks").innerHTML = localStorage.clicks;
    }
});

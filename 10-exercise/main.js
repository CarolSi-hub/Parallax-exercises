const parallax = document.getElementById("parallax");
const parallax1 = document.getElementById("parallax1");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionX = offset * 0.7 + "px";
    parallax1.style.backgroundPositionY = offset * 0.7 + "px";
} );
document.addEventListener("DOMContentLoaded", () => {
    const flower = document.getElementById("flower");

    flower.addEventListener("mouseenter", () => {
        flower.style.transform = "scale(1.2) rotate(10deg)";
    });

    flower.addEventListener("mouseleave", () => {
        flower.style.transform = "scale(1) rotate(0deg)";
    });
});

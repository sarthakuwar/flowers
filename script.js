document.addEventListener("DOMContentLoaded", () => {
    const flower = document.getElementById("flower");

    flower.addEventListener("mouseenter", () => {
        flower.style.transform = "rotate(10deg)";
    });

    flower.addEventListener("mouseleave", () => {
        flower.style.transform = " rotate(0deg)";
    });
    const cat = document.getElementById('sprite-cat');
    const meowText = document.getElementById('meow-text');
  
    // Show "meow" on hover
    cat.addEventListener('mouseenter', function () {
        cat.style.transform = "rotate(10deg)"
      meowText.classList.add('visible');
      
    });
  
    // Hide "meow" when not hovering
    cat.addEventListener('mouseleave', function () {
      meowText.classList.remove('visible');
       cat.style.transform = "rotate(30deg)"
    });
});

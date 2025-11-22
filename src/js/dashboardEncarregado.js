




//scrow do slide carrossels
const slide = document.querySelector(".slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

// quando o botão for clicado, passa para próximas imagens do carrossel.
btnNext.addEventListener("click", () => {
    slide.scrollLeft += 350; 
});

// quando o botão for clicado, retrocede as imagens do carrossel.
btnPrev.addEventListener("click", () => {
    slide.scrollLeft -= 350;
});

slide.addEventListener("wheel", (event) => {
    event.preventDefault();
    slide.scrollLeft += event.deltaY;
});

document.querySelector(".exitButton").addEventListener("click", () => window.location.href = "/index.html");



const slide = document.querySelector(".slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

btnNext.addEventListener("click", () => {
    slide.scrollLeft += 350;
});

btnPrev.addEventListener("click", () => {
    slide.scrollLeft -= 350;
});

slide.addEventListener("wheel", (event) => {
    event.preventDefault();
    slide.scrollLeft += event.deltaY;
});

document.querySelector(".exitButton").addEventListener("click", () => window.location.href = "/");

document.getElementById("btnSolicitarHoras").addEventListener("click", () => {
    window.location.href = "solocitaçãoEncarregado.html";
});

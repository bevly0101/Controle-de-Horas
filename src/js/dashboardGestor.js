

const renderComponent = (pagelink, local) => {
    fetch(pagelink).then(e => e.text()).then(e => {
        const newElement = document.createTextNode(e)
        local.innerHTML = newElement.nodeValue;
    });
}

const pages = [
    '../components/viewReports.html',
    '../components/generateReport.html',
    './teste.html'
]

const buttonsNavList = document.querySelectorAll('.contentNavButtons button');

const areaChangeNav = document.querySelector('.containerPageChoose');

renderComponent(pages[0], areaChangeNav);

buttonsNavList.forEach((e, i) => {
    if (i !== 2) {
        e.addEventListener('click', () => {

            if (!e.classList.contains('selected')) {

                buttonsNavList.forEach(e => e.classList.remove('selected'));

                e.classList.add('selected');

                renderComponent(pages[i], areaChangeNav);
            }
        })
    }
});


document.querySelector(".exitButton").addEventListener("click", () => window.location.href = "/index.html");




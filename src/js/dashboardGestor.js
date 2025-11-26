
const changeTable = (indexObraSelected) => {
    const table = document.querySelector('.tableReport');
    const tfoot = document.querySelector('table tfoot');
    let total = 0;

    const newTable = obras[Object.keys(obras)[indexObraSelected]].map(e => {
        total += e.custoH;
        return `
        <tr>
        <td>${e.data}</td>
        <td>${e.qt_horasExtrasReal}</td>
        <td>${new Intl.NumberFormat('pt-br', {
            style: 'currency',
            currency: 'BRL'
        }).format(e.custoH)}</td>
        </tr>
        `
    }).join('');
    tfoot.querySelectorAll('tr th')[2].innerHTML = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(total);

    table.querySelector('tbody').innerHTML = newTable
};

 
const whenRenderComponent = () => {
    const selector = document.querySelector(".selectorContainer select");
    const options = []
    Object.keys(obras).forEach((e, i) => {
        options.push(`<option value="${i}">${e}</option>`)
    })
    selector.innerHTML = options.join('');

    changeTable(0);

    document.querySelector(".selectorContainer select").addEventListener("change", (e) => {
        changeTable(e.target.value)
    });




}


const renderComponent = (pagelink, local) => {
    fetch(pagelink).then(e => e.text()).then(e => {
        const newElement = document.createTextNode(e)
        local.innerHTML = newElement.nodeValue;
        whenRenderComponent()
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




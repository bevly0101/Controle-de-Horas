
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

    // quando a obra for selecionada, alterar a tabela referente a aobra selecionada.



}


// função com o propósito de renderizar determinado componente
const renderComponent = (pagelink, local) => {
    fetch(pagelink).then(e => e.text()).then(e => {
        const newElement = document.createTextNode(e)
        local.innerHTML = newElement.nodeValue;
        whenRenderComponent()
    });
}

//

// lista do caminho referente a cada componente da pagina do gestor
const pages = [
    '../components/viewReports.html',
    '../components/generateReport.html',
    './teste.html'
]

// Lista dos botões de navegação
const buttonsNavList = document.querySelectorAll('.contentNavButtons button');

// area que muderá de acordo com a escolha de navegação
const areaChangeNav = document.querySelector('.containerPageChoose');

// renderiza a vizualizar relatorios como pdrão ao abrir a página
renderComponent(pages[0], areaChangeNav);

// percorre cada botão para aplicar o evento de click
buttonsNavList.forEach((e, i) => {
    // não aplicar evento ao ultimo botão
    if (i !== 2) {
        e.addEventListener('click', () => {

            // caso o botão clicado não estiver selecionado, percorre todos, remove a classe de selecionado
            // e adiciona a classe de selecionado para o botão clicado para renderizar o respectivo componente.
            if (!e.classList.contains('selected')) {

                // percorre os botões novamente para remover a classe "selected"
                buttonsNavList.forEach(e => e.classList.remove('selected'));

                // adiciona o atributo da classe ao botão clicado
                e.classList.add('selected');

                // renderiz o repectivo componente.
                renderComponent(pages[i], areaChangeNav);
            }
        })
    }
});


document.querySelector(".exitButton").addEventListener("click", () => window.location.href = "/index.html");





// função com o propósito de renderizar determinado componente
const renderComponent = (pagelink, local)=> {
    fetch(pagelink).then(e => e.text()).then(e => {
            const newElement = document.createTextNode(e)
            local.innerHTML = newElement.nodeValue;
        });
}

//

// lista do caminho referente a cada componente da pagina do gestor
const pages = [
    '../components/viewReports.html',
    './teste.html',
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
    e.addEventListener('click', () => {

        // caso o botão clicado não estiver selecionado, percorre todos, remove a classe de selecionado
        // e adiciona a classe de selecionado para o botão clicado para renderizar o respectivo componente.
        if(!e.classList.contains('selected')){

            // percorre os botões novamente para remover a classe "selected"
            buttonsNavList.forEach(e => e.classList.remove('selected'));

            // adiciona o atributo da classe ao botão clicado
            e.classList.add('selected');

            // renderiz o repectivo componente.
            renderComponent(pages[i], areaChangeNav );
        }
    })
});


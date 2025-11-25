console.table(users)

const validador = (cpf, senha) => {
    let user = users.filter((user) => user.cpf == cpf);

    if (user.length > 0) {
        return user[0].senha === senha ? "autenticado" : new Error("senha incorreta");
    }
    else return new Error("usuário não encontrado");
};

const getCargo = (cpf, senha) => {
    return (users.filter((user) => user.cpf === cpf && user.senha === senha))[0].cargo
}


document.querySelector(".form-login").addEventListener("submit", (element) => {
    element.preventDefault();
    let [userCpf, userPassword] = element.target; //desestruturação de array

    let dadosValidados = validador(userCpf.value, userPassword.value);

    if (dadosValidados === "autenticado") {
        let cargo = getCargo(userCpf.value, userPassword.value);

        window.location.href = `./src/pages/dashboard${cargo}.html`;
    }

    else {
        const listErrorMessages = document.querySelectorAll('.container-inputs .errorMessage');

        listErrorMessages.forEach(element => element.style.display = "none");
        ({
            "usuário não encontrado": () => {
                listErrorMessages[0].style.display = "block";
            },
            "senha incorreta": () => {
                listErrorMessages[1].style.display = "block";

            }
        })[dadosValidados.message]()
    }
});
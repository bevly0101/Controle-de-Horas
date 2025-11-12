
// lista de usuários para simular um banco de dados
const users = [
    {
        cargo: "Encarregado",
        cpf: "54321109876",
        senha: "123456"
    },
    {
        cargo: "Técnico",
        cpf: "12345678910",
        senha: "123456"
    },
    {
        cargo: "Gestor",
        cpf: "10987654321", 
        senha: "123456"
    }

];

// Função para encontrar um usuário com o mesmo cpf e senha no Banco de Dados
const validador = (cpf, senha) => {
    let user = users.filter((user) => user.cpf == cpf);

    console.log(user)

    if (user.length>0){
        return user[0].cpf === cpf && user[0].senha === senha ? "autenticado" : user[0].cpf === cpf && user[0].senha === senha ? new Error("senha incorreta") : new Error("usuário não encontrado");
    }
    else return new Error("usuário não encontrado");
};

const getCargo = (cpf, senha) => {
    return (users.filter((user) => user.cpf === cpf && user.senha === senha))[0].cargo
}

// escuta o evento de submit do formulário
document.querySelector(".form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    let [userCpf, userPassword] = e.target;

    let dadosValidados = validador(userCpf.value, userPassword.value);

    if(dadosValidados === "autenticado"){
        let cargo = getCargo(userCpf.value, userPassword.value)
        window.location.href = `./src/pages/dashboard${cargo}.html`
    }
    else window.alert(dadosValidados.message)




});
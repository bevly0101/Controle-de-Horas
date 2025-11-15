
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

console.log(users)

// Função para encontrar um usuário com o mesmo cpf e senha no Banco de Dados
const validador = (cpf, senha) => {
    // busca o usuário que tem o mesmo cpf digitado
    let user = users.filter((user) => user.cpf == cpf);
    //console.log(user)

    // caso tenha encontrado, será verificado se a senha é a mesma digitada
    // coso contrario retornará os respectivos erros
    if (user.length>0){
        return user[0].senha === senha ? "autenticado" : new Error("senha incorreta");
    }
    else return new Error("usuário não encontrado");
};

// busca o cargo do usuário que está logando de acordo com os cargos existentes no banco de dados
const getCargo = (cpf, senha) => {
    return (users.filter((user) => user.cpf === cpf && user.senha === senha))[0].cargo
}

// escuta o evento de submit do formulário
document.querySelector(".form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    let [userCpf, userPassword] = e.target;

    // usa a função de validar dados do usuário
    let dadosValidados = validador(userCpf.value, userPassword.value);

    // se os dados forem corretos, retornará "autenticado"
    if(dadosValidados === "autenticado"){
        // usa a função de buscar pelo cargo do usuário
        let cargo = getCargo(userCpf.value, userPassword.value)

        // envia usuário para a respectiva página do cargo
        window.location.href = `./src/pages/dashboard${cargo}.html`
    }
    // em caso dos dados não estiverem certos, retornará um erro.
    else window.alert(dadosValidados.message)
});
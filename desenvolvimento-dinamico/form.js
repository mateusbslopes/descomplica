/**
 * FACULDADE ALURA
 * CURSO ANALISE E DESENVOLVIMENTO DE SISTEMAS
 * MATERIA DESENVOVIMENTO DINAMICO
 * ALUNO MATEUS BARBOSA SIQUEIRA LOPES @mateusbslopes
 * node 20.13.1
 * MACOS SONOMA 14.4.1 (23E224)
 */


function getValues() {
    let name, age, role, position, language;

    name = document.getElementsByName("name")[0].value;
    age = document.getElementsByName("age")[0].value;
    role = document.getElementsByName("role")[0].value;
    position = document.getElementsByName("position")[0].value;
    language = document.getElementsByName("language")[0].value;

    return {
        name, age, role, position, language
    }

}

function validateName(name) {
    if (!name) throw "Nome não pode ser vazio"
}

function validateAge(age) {
    if (!age) throw "Idade não pode ser vazio"
    if (isNaN(age)) throw "Idade deve ser um número"
    if (age <= 0) throw "Idade deve ser maior que 0"
    if (Number(age) !== Math.trunc(Number(age))) throw "Idade deve ser um número inteiro"
}

function validateRole(role) {
    if (!role) throw "Selecione um cargo"
}

function validatePosition(position) {
    if (!position) throw "Posição não pode ser vazia"
}

function validateLanguage(language) {
    if (!language) throw "Linguagem não pode ser vazia"
}

function validateFields({ name, age, role, position, language }) {
    try {
        document.getElementsByName("name-error")[0].innerText = "";
        validateName(name)
    } catch (err) {
        document.getElementsByName("name-error")[0].innerText = err;
    }

    try {
        document.getElementsByName("age-error")[0].innerText = "";
        validateAge(age)
    } catch (err) {
        document.getElementsByName("age-error")[0].innerText = err;
    }

    try {
        document.getElementsByName("role-error")[0].innerText = "";
        validateRole(role)
    } catch (err) {
        document.getElementsByName("role-error")[0].innerText = err;
    }

    try {
        document.getElementsByName("position-error")[0].innerText = "";
        validatePosition(position)
    } catch (err) {
        document.getElementsByName("position-error")[0].innerText = err;
    }

    try {
        document.getElementsByName("language-error")[0].innerText = "";
        validateLanguage(language)
    } catch (err) {
        document.getElementsByName("language-error")[0].innerText = err;
    }
}

function showValues({ manager, developer }) {
    document.getElementsByName("manager-presentation")[0].innerHTML = `<b>Apresentação gerente</b>: ${manager}`
    document.getElementsByName("developer-presentation")[0].innerHTML = `<b>Apresentação desenvolvedor</b>: ${developer}`
}

function onSubmitForm() {
    const values = getValues();
    validateFields(values);
    const { name, age, role, position, language } = values;

    let manager = new Gerente(name, age, role, position);
    let developer = new Desenvolvedor(name, age, role, position, language);

    let managerPresentation = manager.seApresentar()
    let developerPresentation = developer.seApresentar()

    showValues({ manager: managerPresentation, developer: developerPresentation });

}

window.onload = () => {
    var form = document.getElementsByName("form")[0];
    function handleForm(event) { event.preventDefault(); onSubmitForm(); }
    form.addEventListener('submit', handleForm);
}

class Funcionario {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    seApresentar() {
        return `Sou a(o) ${this.name}, tenho ${this.age} anos e trabalho como ${this.position}.`;
    }

    trabalhar() {
        // todo
    }
}

class Gerente extends Funcionario {
    constructor(name, age, position, department) {
        super(name, age, position);
        this.department = department;
    }

    gerenciar() {
        // todo
    }

    seApresentar() {
        return super.seApresentar() + ` Trabalho no departamento ${this.department}.`;
    }
}

class Desenvolvedor extends Funcionario {  // Now correctly extends Funcionario
    constructor(name, age, position, department, language) {
        super(name, age, position);
        this.department = department;
        this.language = language;
    }

    programar() {
        // todo
    }

    seApresentar() {
        return super.seApresentar() + ` Trabalho no departamento ${this.department} com a linguagem ${this.language}.`;
    }
}

let mario = new Gerente('Mario', 24, 'serralheiro', 'Comercial');
let luigi = new Desenvolvedor('Luigi', 22, 'lojista', 'Comercial', 'C#');

console.log(mario.seApresentar());
console.log(luigi.seApresentar());
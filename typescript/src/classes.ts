import { Animal, Clinica, Pessoa } from "./interfaces";

class Gato extends Animal {
    constructor(
        readonly id: number,
        public nome: string
    ) { super(id, "mamifero") }

    get meow() {
        return "MEOWWNN";
    }

    public mostrarDetalhes(): void {
        console.log(`Gato ${this.nome} do tipo ${this.categoria} e tem ${this.qtd_patas} patas`);
    }

    public toString(): string {
        return `${this.nome}`;
    }
}

class Cachorro extends Animal {
    constructor(
        readonly id: number,
        public nome: string,
        public raca: string
    ) { super(id, "mamifero") }

    get latir() {
        return "AUAU";
    }

    public mostrarDetalhes(): void {
        console.log(`Cachorro ${this.nome} do tipo ${this.categoria} da raça ${this.raca} e tem ${this.qtd_patas} patas`);
    }

    public toString(): string {
        return `${this.nome}`;
    }
}

class PetGuard implements Clinica {
    private readonly _animais: Animal[] = [];
    // Usado para que externamente o array _animais não seja modificado
    // via métodos do array como .pop e etc.
    private _tempListaAnimais: Animal[] = [];
    private _title: string;
    public dono: Pessoa;

    constructor(title: string, dono: Pessoa) {
        this._title = title;
        this.dono = dono;
    }

    get title() {
        return this._title;
    }

    get animais(): Animal[] {
        return [...this._tempListaAnimais];
    }

    public adicionarAnimais(...animais: Animal[]): void {
        this._animais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._animais];
    }

    public mostrarDetalhes(): void {
        console.log(`Pet Shop ${this._title} do ${this.dono} tem os seguintes animais: ${this._animais}`);
    }
}

const mingal = new Gato(1, "Mingal");
console.log(mingal);
console.log(mingal.meow);
mingal.mostrarDetalhes();

const rex = new Cachorro(2, "Rex", "Pincher");
console.log(rex);
console.log(rex.latir);
rex.mostrarDetalhes();

const fulano: Pessoa = {nome: "Fulano", cpf: "01129384544", toString() { return this.nome }}
const petGuard = new PetGuard("Pet Guard", fulano)
petGuard.adicionarAnimais(mingal, rex);
petGuard.mostrarDetalhes();
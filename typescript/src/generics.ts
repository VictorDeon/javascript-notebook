// Generics define o tipo em tempo de execução
// Generics com funções ########################################
type NumberOrString = number | string;
function somaOuConcatena<T extends NumberOrString>(x: T, y: T): NumberOrString {
    return (typeof x === "number" && typeof y === "number") ? x + y : x + "" + y;
}

somaOuConcatena(1, 2);
somaOuConcatena("1", "2");
// somaOuConcatena(false, true); // error
// somaOuConcatena(1, "2"); // error
// somaOuConcatena("1", 2); // error

// Generics com arrays #########################################
type ArrayUniqueTypes<T> = T[];
const teste1: ArrayUniqueTypes<number> = [1, 2];
const teste2: ArrayUniqueTypes<string> = ["1", "2"];
const teste3: ArrayUniqueTypes<string | boolean> = ["1", "2", true, false];
const teste4: Array<number> = [1, 2];
const teste5: Array<string> = ["1", "2"];
const teste6: Array<string | boolean> = ["1", "2", true, false];

// Generics com classes #########################################
class Pessoa {
    constructor(private _nome: string) {}

    set nome(nome: string) {
        this._nome = nome;
    }

    toString(): string {
        return this._nome;
    }
}

class Animal {
    constructor(private _nome: string) {}

    set nome(nome: string) {
        this._nome = nome;
    }

    toString(): string {
        return this._nome;
    }
}

class List<T> {
    private list: T[] = [];

    get(index: number): T | null {
        const len = this.list.length;
        if (len === 0) return null;
        if (index > len || index < 0) return null;
        return this.list[index];
    }

    add(element: T): this {
        this.list.push(element);
        return this;
    }

    remove(index: number): T | null {
        const element = this.get(index);
        if (element !== null) {
            this.list.splice(index, 1);
            return element;
        }
        return null;
    }
}

const listaDePessoas = new List<Pessoa>();
const listaDeAnimais = new List<Animal>();

listaDePessoas
    .add(new Pessoa("Daniel"))
    .add(new Pessoa("Maria"))
    .add(new Pessoa("João"))
    // .add(new Animal("Cavalo")) // error

    listaDeAnimais
    .add(new Animal("Toto"))
    .add(new Animal("XU"))
    // .add(new Pessoa("Victor")) // error

console.log(listaDePessoas.get(0));
console.log(listaDePessoas.get(1));
console.log(listaDePessoas.get(2));
console.log(listaDeAnimais.get(0));
console.log(listaDeAnimais.get(1));
const removed = listaDePessoas.remove(0);
console.log(`Removido ${removed}`);
console.log(`Primeiro elemento ${listaDePessoas.get(0)}`);

// Generic com interfaces #################################
interface Action<T = string> {
    action: T
}

const step1: Action = {
    action: "sair"
}
const step2: Action<number> = {
    action: 0
}
const step3: Action<boolean> = {
    action: true
}

// Restringindo a função para receber no minimos os dados do Action
const historyActions: Array<Action> = [];
const addAction = <T extends Action>(obj: T) => {
    historyActions.push(obj);
}
addAction({
    action: "sair",
    timestamp: 10,
    teste: 5
})
console.log(historyActions);

// Generic com 2 ou mais tipos e restringe o segundo ######
interface OtherAction<X, Y extends number | string = string, Z = string> {
    action: X,
    timestamp: Y,
    name: Z
}

const step4: OtherAction<string, string> = {
    action: "sair",
    timestamp: "22/10/2022",
    name: "Victor"
}

// Generic com Promises ############################################

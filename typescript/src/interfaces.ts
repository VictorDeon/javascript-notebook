export abstract class Animal {
    public readonly id: number;
    protected categoria: string;
    public abstract nome: string;
    private _qtd_patas: number = 4;

    constructor(id: number, categoria: string) {
        this.categoria = categoria;
        this.id = id;
    }

    get qtd_patas(): number {
        return this._qtd_patas;
    }

    set qtd_patas(qtd: number) {
        if (this.categoria == "quadrupte") {
            this._qtd_patas = 4;
        } else {
            this._qtd_patas = qtd;
        }
    }

    public abstract mostrarDetalhes(): void;
    public abstract toString(): string;
}

export interface Clinica {
    cnpj?: string,
    adicionarAnimais(): void;
    mostrarDetalhes(): void;
}

export interface Pessoa {
    nome: string,
    cpf: string,
    idade?: number
    toString(): string
}
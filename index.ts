let obj = {};

enum TamanhoCaneca {
    PEQUENA,
    MEDIA,
    GRANDE,

}

type CanecaProps = {
    cor: string;
    material: string;
    tamanho: TamanhoCaneca;
    estampa: string;
};

class Caneca {
    public cor: string;
    public material: string;
    public tamanho: TamanhoCaneca;
    public estampa: string;
    private conteudo: string | undefined;

    // constructor(){

    // }

    Beber() {
        if (!this.conteudo) {
            console.log("Caneca Vazia");
        }

        if (this.conteudo?.toUpperCase() == "VENENO") {
            console.log("Vou tomar isso não, irmão");
        }

        if (this.conteudo?.toLocaleUpperCase() == "FARINHA") {
            console.log("Estou tentando fazer um bolo");
        }
        return "Que delicia esse " + this.conteudo;


    }
    Encher(conteudo: string) {
        if (!this.conteudo) {
            this.conteudo = conteudo;
        } else {
            console.log('A caneca está cheia.');
        }
    }
    Quebrar() {
        console.log("Foi-se a caneca");
    }
    Medir() {
        if (this.conteudo?.toUpperCase() == "Farinha") {
            console.log("Esse bolo vai ficar top");
        }
    }
}

const canecaDaBlue = new Caneca();

canecaDaBlue.tamanho = TamanhoCaneca.GRANDE;
canecaDaBlue.estampa = "Logo da Blue";
canecaDaBlue.material = "Cerâmica";
canecaDaBlue.Encher("Café");
canecaDaBlue.Encher("Veneno");



type PetProps = {
    nome: string;
    especie: string;
    tamanho: string;
    sexo: string;

};

class Pet {
    private name: string;
    private especie: string;
    private tamanho: string;
    private sexo: string;

    constructor({ nome, especie, tamanho, sexo }: PetProps) {
        this.especie = especie;
        this.name = nome;
        this.tamanho = tamanho;
        this.sexo = sexo;

    }

    Comer() {
        console.log("hmmm, comida");
    }
    Evacuar() {
        console.log("Me deixa em paz");
    }
    Movimentar() {
        console.log("Andando");
    }

    get nome() {
        return this.name;    // bom para aplicar validação, mas pouco utlizado
    }

    set nome(name: string) {  // bom para aplicar validação, mas pouco utlizado
        this.name = name;
    }

}

const Gato = new Pet({
    nome: "bichano",
    especie: "gato",
    sexo: "masculino",
    tamanho: "pequeno"

});

console.log(Gato.nome);
Gato.nome = "Vlad";
console.log(Gato.nome);


interface IAluno {
    dormir: () => string;
    codar: () => string;
    estudar: () => string;
    makeCoffe: (cafe: boolean) => string;
}

class Aluno implements IAluno {
    dormir() {
        return "soneca"
    }
    codar() {
        return "Virando Surfista"
    }
    estudar() {
        return "Aula até o amanhecer"
    }
    makeCoffe(cafe: boolean){
        if (cafe) {
            return "que delicia de café"
        }
        else {
            return "no coffe no code"
        }
    }

    Procastinar() {
        return "To fora!"
    }

}
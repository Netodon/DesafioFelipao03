class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "usou um ataque indefinido";
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

let mago = new Heroi("Nets", "33", "mago")
let guerreiro = new Heroi("noberto", "25", "guerreiro")
let monge = new Heroi("rupert", "22", "monge")
let ninja = new Heroi("escanor", "44", "ninja")

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()
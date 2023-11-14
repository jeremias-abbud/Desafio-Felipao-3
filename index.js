class hero {
    constructor(nome, idade, tipo){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
        }
    atacar(){
        switch (this.tipo){
            case this.tipo= "mago":
                this.ataque= "magia"
                break
            case this.tipo= "guerreiro":
                this.ataque= "espada"
                break
            case this.tipo= "monge":
                this.ataque= "artes marciais"
                break
            case this.tipo= "ninja":
                this.ataque= "shuriken"
                break
            }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque} . `)
    }
}

let hero1 = new hero("Fialabum " , 154 , "mago")
let hero2 = new hero("Thanderus" , 40 , "guerreiro")
let hero3 = new hero("Dalai Inlama" , 65 , "monge")
let hero4 = new hero("Jiraya" , 27, "ninja")

hero1.atacar()
hero2.atacar()
hero3.atacar()
hero4.atacar()
function Animal(nome) {
    this.nome = nome;
    this.som = function () {
        return 'This is an abstract'
    }
}

function Cachorro(nome) {
    Animal.call(this, nome)
    this.som = function() {
        return "Au Au"
    }
}

function Gato(nome) {
    Animal.call(this, nome)
    this.som = function() {
        return 'Miau Miau'
    };
}

function Pato(nome) {
    Animal.call(this, nome)
    this.som = function() {
        return 'Quack Quack'
    }
}

const cachorro = new Cachorro('Tobby')
const gato = new Gato('John')
const pato = new Pato('Donald')

console.log(`Cachorro ${cachorro.nome} fala ${cachorro.som()}`)
console.log(`Gato ${gato.nome} fala ${gato.som()}`)
console.log(`Pato ${pato.nome} fala ${pato.som()}`)
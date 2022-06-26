//Определяет базовую структуру, а дочерний элемент выполняет функционал, не изменяя поведение базового класса
class Employe{
    constructor(name, salary){
        this.name = name
        this.salary = salary
    }
    //Этот метод делегируем на дочерние классы
    responsibilities() {}

    work(){
        return `${this.name} выполянет ${this.responsibilities()}`
    }

    getPaid(){
        return `${this.name} получает ЗП ${this.salary}`
    }
}

class Developer extends Employe{
    constructor(name, salary){
        super(name, salary)
    }

    responsibilities() {
        return `процесс создания программ`
    }
}

class Tester extends Employe{
    constructor(name, salary){
        super(name, salary)
    }

    responsibilities() {
        return `процесс тестирования`
    }
}

const dev = new Developer('Roma', 1800)
const test = new Tester('Dima', 1200)

console.log(dev.getPaid())
console.log(dev.work())

console.log(test.getPaid())
console.log(test.work())
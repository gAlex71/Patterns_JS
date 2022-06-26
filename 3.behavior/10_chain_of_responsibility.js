// Паттерн позволяет легко изменять объект
class mySum{
    constructor(initialValue = 42){
        this.sum = initialValue
    }

    add(value){
        this.sum += value
        return this
    }
}

const sum1 = new mySum()
//Суть паттерна
console.log(sum1.add(8).add(10).add(5).sum);
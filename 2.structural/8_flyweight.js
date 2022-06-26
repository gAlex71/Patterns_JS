// Служит для того, чтобы мы могли эффективно работать с данными через различные типы объектов
// К нему относится кэширование, сохранение памяти и т.д.
class Car{
    constructor(model, price){
        this.model = model
        this.price = price
    }
}

//Кэшируем нужные нам данные
class CarFactory{
    constructor(){
        this.cars = []
    }

    create(model, price){
        const candidate = this.getCar(model)
        if(candidate){
            return candidate
        }

        const newCar = new Car(model, price)
        this.cars.push(newCar)
        return newCar
    }

    getCar(model){
        return this.cars.find(car => car.model === model)
    }
}

const factory = new CarFactory()
const audi = factory.create('audi', 13000)
const bmw = factory.create('bmw', 10000)

console.log(audi)
console.log(bmw)
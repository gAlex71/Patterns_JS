//Позволяет создать оболочку, чтобы мы могли использовать разные алгоритмы и задачи

//Траснпортное средство
class Vehicle{
    travelTime(){
        return this.timeTaken
    }
}

class Bus extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 10
    }
}

class Train extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 5
    }
}

class Car extends Vehicle{
    constructor(){
        super()
        this.timeTaken = 3
    }
}

//Класс, позволяющий показать ту или иную стратегию
class Commute{
    travel(transport){
        return transport.travelTime()
    }
}

const commute = new Commute()
console.log(commute.travel(new Bus()))
console.log(commute.travel(new Train()))
console.log(commute.travel(new Car()))
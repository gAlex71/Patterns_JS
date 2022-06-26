//Цвет светофора
class Light{
    constructor(light){
        this.light = light
    }
}

class RedLight extends Light{
    constructor(){
        super('red')
    }

    sign(){
        return 'Стоп'
    }
}

class YellowLight extends Light{
    constructor(){
        super('yellow')
    }

    sign(){
        return 'Осторожно'
    }
}

class GreenLight extends Light{
    constructor(){
        super('green')
    }

    sign(){
        return 'Езжай'
    }
}

//Создаем родительский класс, который будет объединять в себя эти state
class TrafficLight{
    constructor(){
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ]
        this.current = this.states[0]
    }

    //Метод изменения state
    change(){
        //Общее количество state
        const total = this.states.length
        //Текущее значение state
        let index = this.states.findIndex(index => index === this.current)
        //Переключение на следующее состояние state
        if(index + 1 < total){
            this.current = this.states[index + 1]
        }else{
            this.current = this.states[0]
        }
    }

    sign(){
        return this.current.sign()
    }
}

const traffic = new TrafficLight()
console.log(traffic.sign());
traffic.change()

console.log(traffic.sign());
traffic.change()

console.log(traffic.sign());
traffic.change()
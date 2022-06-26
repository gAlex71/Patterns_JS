//Позволяет создать оболочку над объектом, и с помощью нее управлять им
//Простым примером является Redax
class MyMath{
    constructor(initialValue = 0){
        this.num = initialValue
    }

    squire(){
        return this.num ** 2
    }

    cube(){
        return this.num ** 3
    }
}

//Паттерн
class Command{
    constructor(subject){
        this.subject = subject
        this.commandsExecuted = []
    }

    execute(command){
        this.commandsExecuted.push(command)
        return this.subject[command]()
    }
}

const x = new Command(new MyMath(2))
console.log(x.execute('squire'))
console.log(x.execute('cube'))
//Массивы команд, которые были вызваны
console.log(x.commandsExecuted);
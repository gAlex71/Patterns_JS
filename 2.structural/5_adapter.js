// Позволяет интегрировать старый интерфейс какого-то класса в новый интерфейс
class OldCalc{
    operation(t1, t2, operation){
        switch(operation){
            case 'add': return t1 + t2
            case 'sub': return t1 - t2
            default: return NaN
        }
    }
}

class NewCalc{
    add(t1, t2){
        return t1 + t2
    }
    sub(t1, t2){
        return t1 - t2
    }
}

//Этот класс похволит скомбинировать функционал первого и второго класса между собой
//Часто Адаптеры используются при работе с API
class CalcAdapter{
    constructor(){
        this.calc = new NewCalc()
    }

    operation(t1, t2, operation){
        switch(operation){
            case 'add': return this.calc.add(t1, t2)
            case 'sub': return this.calc.sub(t1, t2)
            default: return NaN
        }
    }
}

const oldCalc = new OldCalc()
console.log(oldCalc.operation(10, 5, 'add'))

const newCalc = new NewCalc()
console.log(newCalc.add(10, 5))

const adapter = new CalcAdapter()
console.log(adapter.operation(10, 5, 'sub'))
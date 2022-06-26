const car = {
    wheels: 4,

    init(){
        console.log(`У меня есть ${this.wheels} колеса, и владелец ${this.owner}`);
    }
}

const carWithOwner = Object.create(car, {
    owner:{
        value: 'Дмитрий'
    }
})

// Ссылкой на прототип является объект car
console.log(carWithOwner.__proto__ === car);

carWithOwner.init()
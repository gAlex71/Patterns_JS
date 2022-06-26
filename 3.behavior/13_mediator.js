// Позволяет выстраивать плотную коммуникацию между объектами разного типа
// Позволяет взаимодействовать группе объектов между собой

//Будем создавать пользователей и подключать их к конкретному чату
class User{
    constructor(name){
        this.name = name
        this.room = null
    }
    //Отправить сообщение
    send(message, to){
        this.room.send(message, this, to)
    }
    //Получить сообщение
    receive(message, from){
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom{
    constructor(){
        this.users = {}
    }

    register(user){
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to){
        //Если присутствует поле to(кому), то отправляем ему письмо
        if(to){
            to.receive(message, from)
        }else{
            //Если отсутствует, то отправляем письмо в общий чат
            Object.keys(this.users).forEach(key => {
                //Если пользователь не является отправителем, то отправляем ему письмо
                if(this.users.key !== from){
                    this.users[key].receive(message, from)
                }
            });
        }
    }
}

//Пользователи
const lena = new User('Lena')
const dima = new User('Dima')
const dasha = new User('Dasha')

const room = new ChatRoom()

room.register(lena)
room.register(dima)
room.register(dasha)

dima.send('Hello', lena)
dasha.send('Hello gays')
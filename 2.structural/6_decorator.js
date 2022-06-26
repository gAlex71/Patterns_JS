//Позволяет добавлять новый функционал, или поведение для существующих классов
//Базовый класс
class Server{
    constructor(ip, port){
        this.ip = ip
        this.port = port
    }

    get url(){
        return `https://${this.ip}:${this.port}`
    }
}

//Декоратор - принимает инстанс класса, и возвращает его обратно
function aws(server){
    server.isAws = true
    server.awsInfo = function(){
        return server.url
    }
    return server
}

//Оборачиваем класс в декоратор, декоратор наложил новый функционал
const s1 = aws(new Server('12.34.65.32', 8080))
console.log(s1.isAws)
console.log(s1.awsInfo())
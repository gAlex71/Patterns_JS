class Server{
    constructor(name, ip){
        this.name = name,
        this.ip = ip
    }

    getUrl(){
        return `https://${this.ip}:80`
    }
}
//Создаем объект заданного типа
const aws = new Server('AWS German', '81.22.25.17')
console.log(aws.getUrl())
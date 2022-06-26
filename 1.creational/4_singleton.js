//Если инстанс уже создан, то он просто возвращается
class Database{
    constructor(data){
        if(Database.exists){
            return Database.instance
        }
        Database.instance = this
        Database.exists = true
        this.data = data
    }

    getData(){
        return this.data
    }
}

//Создаем инстанс
const mongo = new Database('MongoDB')
console.log(mongo.getData())
// Инстанс уже есть, и относится к MongoDB
const mySQL = new Database('MySQL')
console.log(mySQL.getData())
// Служит для создания более простого интерфейса для взаимодействия с классами
//Простым примером является библиотека JQuery

class Complaints{
    constructor(){
        this.complaints = []
    }

    reply(complaint){}

    add(complaint){
        this.complaints.push(complaint)
        return this.reply(complaint)
    }
}

class ProductComplaints extends Complaints{
    reply({id, customer, details}){
        return `Product: ${id}: ${customer} (${details})`
    }
}

class ServiceComplaints extends Complaints{
    reply({id, customer, details}){
        return `Service: ${id}: ${customer} (${details})`
    }
}

//Facade
class ComplaintRegistry{
    //Регистрация жалобы
    register(customer, type, details){
        const id = Date.now()
        let complaint

        if(type = 'service'){
            complaint = new ServiceComplaints
        }else{
            complaint = new ProductComplaints
        }

        return complaint.add({id, customer, details})
    }
}

//Результат работы фасада
const registry = new ComplaintRegistry()

console.log(registry.register('Sasha', 'service', 'Детали недоступны'))
console.log(registry.register('Misha', 'product', 'Ошибка заказа'))
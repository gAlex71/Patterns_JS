//Ставит ловушки на различные действия, к примеру, может избавить отлишних запросов на сервер
function networkFetch(url){
    return `${url} - ответ от сервера`
}

//Данные, которые мы записываем только один раз
const cashe = new Set()
const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args){
        const url = args[0]
        if(cashe.has(url)){
            return `${url} - ответ из кэша`
        }else{
            cashe.add(url)
            //Универсальный способ обработки любой функции
            return Reflect.apply(target, thisArg, args)
        }
    }
})

console.log(proxiedFetch('angular.io'))
console.log(proxiedFetch('react.io'))
console.log(proxiedFetch('angular.io'))
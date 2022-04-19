import axios from "axios"


const url = 'https://jsonplaceholder.typicode.com/users'


const axiosGetObj = {
    method: 'get',
    url,
    responseType: 'json'
}


export default () => {



    // первый асинхронный запрос (fetch(...)) возвращает промис с асинхронным методом json
    // методом json(), возвразающим результат запроса
    // соответственно приходится делать второй асинхронный запрос

    // PROMISE (fetch)
    fetch(url)
        .then(resp => resp.json())
        .then(console.log)


    // ASYNC (fetch)
    // (async () => {
    //     console.log(await (await fetch(url)).json())
    // })()


    // асинхронный запрос (axios(...)) возвращает промис со 
    // свойством data, содержащим результат запроса


    // PROMISE (axios)
    // axios(axiosGetObj)
    //     .then(resp => console.log(resp.data))


    // ASYNC (fetch)
    // (async () => {
    //     console.log((await axios(axiosGetObj)).data)
    // })()





    return <></>

}
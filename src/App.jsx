import axios from "axios"


const url = 'https://jsonplaceholder.typicode.com/users'


const axiosGetObj = {
    method: 'get',
    url,
    responseType: 'json'
}


export default () => {


    // PROMISE (fetch)

    fetch(url)
        .then(resp => resp.json())
        .then(console.log)


    // ASYNC (fetch)

    // (async () => {
    //     console.log(await (await fetch(url)).json())
    // })()


    // PROMISE (axios)

    // axios(axiosGetObj)
    //     .then(resp => console.log(resp.data))


    // ASYNC (fetch)

    // (async () => {
    //     console.log((await axios(axiosGetObj)).data)
    // })()





    return <></>

}
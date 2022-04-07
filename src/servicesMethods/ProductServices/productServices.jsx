import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const getProducts = async () => {
    const result = HTTPServices.get(`${serverAddress}/products`)
        .then(res => console.log("FF" ,res))
        .catch(err => err.response.data.success)

    return result;
}

export const addProduct = async (body) => {

    const result = HTTPServices.post(`${serverAddress}/products`, body)
        .then()
        .catch(err => err.response.data.success)

    return result;
}

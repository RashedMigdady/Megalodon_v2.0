import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const getProducts = async () => {
    const result = HTTPServices.get(`${serverAddress}/products`)
        .then(res => res.data)
        .catch(err => err.response)
    return result;
}

export const addProduct = async (body) => {
    const result = HTTPServices.post(`${serverAddress}/products`, body)
        .then()
        .catch(err => err.response)
    return result;
}

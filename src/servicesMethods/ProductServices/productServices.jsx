import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const getProducts = async () => {
    const result = HTTPServices.get(`${serverAddress}/products`)
        .then(res => res.data.Products)
        .catch(err => err.response.data.success)

    return result;
}

export const addProduct = async (body) => {

    const result = HTTPServices.post(`${serverAddress}/products`, body)
        .then()
        .catch(err => err.response.data.success)

    return result;
}

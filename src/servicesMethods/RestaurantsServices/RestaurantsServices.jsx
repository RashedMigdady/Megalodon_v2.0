import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'




export const getRestaurantById = async (id) => {
    const result = HTTPServices.get(`${serverAddress}/resturan/${id}`)
        .then(res => res.data.Resturant[0])
        .catch(err => err.response);
    return result
}

export const getAllRestaurants = async () => {
    const result = HTTPServices.get(`${serverAddress}/resturan`)
        .then(res => res.data.result)
        .catch(err => err.response);
    return result;
}

export const createNewRestaurant = async (body) => {
    const result = HTTPServices.post(`${serverAddress}/resturan`, body)
        .then(res => res.data.message)
        .catch(err => err.response);
    return result;
}

export const UpdateRestaurant = async (id, body) => {
    const result = HTTPServices.put(`${serverAddress}/resturan/${id}`, body)
        .then(res => res.data.message)
        .catch(err => err.response);
    return result;
}

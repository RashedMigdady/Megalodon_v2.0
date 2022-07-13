import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const getAllGyms = async () => {
    const result = await HTTPServices.get(`${serverAddress}/gym`)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const UpdateOneGym = async (id, body) => {
    const result = await HTTPServices.put(`${serverAddress}/gym/${id}`, body)
        .then(res => res.data.message)
        .catch(err => err.response);
    return result;
}

export const getGymById = async (id) => {
    const result = await HTTPServices.get(`${serverAddress}/gym/${id}`)
        .then(res => res.data.result[0])
        .catch(err => false)
    return result;
}

export const addNewGym = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/gym`, body)
        .then(res => res.data.message)
        .catch(err => false)
    return result;
}

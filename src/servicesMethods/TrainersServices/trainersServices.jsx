import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const getAllTrainers = async () => {
    const result = await HTTPServices.get(`${serverAddress}/trainer`)
        .then(res => res.data.allTrainers)
        .catch(err => err.response.data.success);
    return result;
}

export const updateTrainer = async (id, body) => {
    const result = await HTTPServices.put(`${serverAddress}/trainer/${id}`, body)
        .then(res => res.data.message)
        .catch(err => err.response.data.success);
    return result;
}

export const getTrainerById = async (id) => {
    const result = await HTTPServices.get(`${serverAddress}/trainer/${id}`)
        .then(res => res.data.Trainer[0])
        .catch(err => err.response.data.success);
    return result;
}

export const addNewTrainer = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/trainer`, body)
        .then(res => res.data.message)
        .catch(err => err.response.data.success);
    return result;
}

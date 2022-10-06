import { Auth, HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper';

export const getRestaurantSubscriptions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/ResturantsSubscribtion`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const createSubscribeWithResturant = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/subscribtion/rest`, body, Auth)
        .then(res => res)
        .catch(err => false)
    return result;
}

export const getTrainersSubscribtions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/TrainersSubscribtion`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const createSubscribeWithTrainer = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/subscribtion/trainer`, body, Auth)
        .then(res => res)
        .catch(err => false)
    return result;
}

export const getGymsSubscribtions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/GymSubscribtions`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const createSubscribeWithGym = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/subscribtion/gym`, body, Auth)
        .then(res => res)
        .catch(err => false);
    return result;

}

import { Auth, HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper';

export const getRestaurantSubscriptions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/ResturantsSubscribtion`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const getTrainersSubscribtions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/TrainersSubscribtion`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

export const getGymsSubscribtions = async () => {
    const result = await HTTPServices.get(`${serverAddress}/subscribtion/GymSubscribtions`, Auth)
        .then(res => res.data.result)
        .catch(err => false);
    return result;
}

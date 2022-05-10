import { HTTPServices, serverAddress } from "../../Helper/HTTPMethod.Helper";

export const getAllReviews = async () => {
    const result = await HTTPServices.get(`${serverAddress}/comment`)
        .then(res => res.data.comment)
        .catch(err => false)
    return result;
}
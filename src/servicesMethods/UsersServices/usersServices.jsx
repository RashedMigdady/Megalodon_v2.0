import { serverAddress, HTTPServices, Auth } from '../../Helper/HTTPMethod.Helper';


export const GetuserProfile = async () => {
    const result = await HTTPServices
        .get(`${serverAddress}/users`, Auth)
        .then((data) => data)
        .catch((err) => false);
    return result;
}

export const EditProfile = async (body) => {
    const result = await HTTPServices
        .put(`${serverAddress}/users`, body, Auth)
        .then((data) => data)
        .catch((err) => false);
    return result;
}



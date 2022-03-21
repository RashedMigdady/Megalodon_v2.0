import { serverAddress, HTTPServices, Auth} from '../../Helper/HTTPMethod.Helper';



export const GetuserProfile = async () => {
    const result = await HTTPServices
        .get(`${serverAddress}/users`, Auth)
        .then((data) => data)
        .catch((err) => err.response);

    return result;
}

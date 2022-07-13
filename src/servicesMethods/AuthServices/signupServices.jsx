import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper';


export const register = async (body) => {
    const result = HTTPServices.post(`${serverAddress}/register`, body)
    .then(res => res)
    .catch(err => err.response)
    return result;
}

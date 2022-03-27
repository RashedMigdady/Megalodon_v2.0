import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper';


export const register = async (body) => {
    const result = HTTPServices.post(`${serverAddress}/register`, body)
    .then(res => true)
    .catch(err => false)
    return result;
}

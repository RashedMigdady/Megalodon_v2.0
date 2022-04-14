import { HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'



export const sendMessage = async (body) => {
    const result = await HTTPServices.post(`${serverAddress}/sendMsg`, body)
        .then(res => res)
        .catch(err => false);
    return result;
}


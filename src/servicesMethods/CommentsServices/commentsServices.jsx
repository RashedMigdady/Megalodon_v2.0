import { Auth, HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'


export const addComment = async (body) => {
    const result = HTTPServices.post(`${serverAddress}/comment`, body, Auth)
        .then(() => { return { title: "Thank you for giving us your opinion ", icon: "success", button: "OK" } })
        .catch(err => err.response);
    return result;


}

import { Auth, HTTPServices, serverAddress } from '../../Helper/HTTPMethod.Helper'


export const addComment = async (body) => {
    console.log("body-comment", body);
    const result = HTTPServices.post(`${serverAddress}/comment`, body, Auth)
        .then(() => { return { title: "Thank you for giving us your opinion ", text: "", icon: "success", button: "OK" } })
        .catch(err => { return { title: "Something Wrong!!", text: "", icon: "warning", button: "OK" } });
    return result;
} 

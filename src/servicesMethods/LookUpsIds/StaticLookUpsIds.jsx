import { HTTPServices, serverAddress, Auth } from '../../Helper/HTTPMethod.Helper'




export const getCountries = async (lookUpId) => {
    const result = await HTTPServices.get(`${serverAddress}/LookUpsIds/Countries/${lookUpId}`, Auth)
        .then(res => res.data)
        .catch(err => false)
    return result;
}

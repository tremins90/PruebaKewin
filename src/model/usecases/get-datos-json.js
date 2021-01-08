import {datosJson} from "@/model/JSONPlaceholder.repository";

export const getDatos = () => {
    return new Promise((resolve, reject) => {
        datosJson().then((response) => {
            console.log('get-datos.json',response)
            if (response.data) {
                resolve(response.data);
            }
            else {
                reject({ response: response, mensaje: `Todo Se derrumbo(88)` });
            }
        }).catch(function (error) {
            reject(error);
        });
    })

}

export default getDatos;

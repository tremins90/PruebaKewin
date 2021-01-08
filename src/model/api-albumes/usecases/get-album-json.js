import {albumJson} from "@/model/api-albumes/AlbumPlaceholder.repository";

export const getAlbums = () => {
    return new Promise((resolve, reject) => {
        albumJson().then((response) => {
            console.log('get-datos.json',response)
            if (response.data) {
                resolve(response.data);
            }
            else {
                reject({ response: response, mensaje: `Todo Se derrumbo(88) en los albums` });
            }
        }).catch(function (error) {
            reject(error);
        });
    })

}

export default getAlbums;

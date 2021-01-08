import axios from "axios";

export const albumJson = () => {
    return new Promise((resolve, reject) => {
        axios.get(
            "https://jsonplaceholder.typicode.com/albums",
        )
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

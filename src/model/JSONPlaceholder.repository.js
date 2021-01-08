import axios from "axios";

export const datosJson = () => {
    return new Promise((resolve, reject) => {
        axios.get(
            "https://jsonplaceholder.typicode.com/users",
        )
            .then(function (response) {
                resolve(response);
            })
            .catch(function (error) {
                reject(error);
            });
    });
}

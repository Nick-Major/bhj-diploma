/* const { response } = require("express"); */

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    let url = options.url;

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            options.callback(null, xhr.response);
        }
    }

    xhr.onerror = () => {
        const err = new Error(xhr.statusText);
        options.callback(err, xhr.response);
    }

    if (options.method === 'GET') {
        url += '?';
        for (let key in options.data) {
            url += `${key}=${options.data[key]}&` 
        }

        xhr.open(options.method, url);
        xhr.send();
    } else {
        const formData = new FormData();

        for (let key in options.data) {
            formData.append(key, options.data[key]);
        }

        xhr.open(options.method, url);
        xhr.send(formData);

    }

    
};

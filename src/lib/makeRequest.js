const axios = require('axios')

export const makeRequest = async (path, type, data) => {
    let response;
    try {
        response = await axios[type](path, data);
    } catch (e) {
        if (e.response) {
            switch (e.response.status) {
                case 403:
                    return Promise.reject({
                        type: 'error',
                        message: e.response.data.message
                    });
                default:
                    return Promise.reject({
                        type: 'error',
                        message: 'Ha ocurrido un error, intente de nuevo'
                    });
            }
        }
    }
    return response;
};
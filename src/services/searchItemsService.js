import {
    makeRequest
} from '../lib/makeRequest'


export const searchItems = async itemsSearch => {
    const response = await makeRequest(`/api/items?q=${itemsSearch}`, 'get', null);
    return response.data;
};

export const searchItemId = async itemId => {
    const response = await makeRequest(`/api/items/${itemId}`, 'get', null);

    return response.data.item;
};
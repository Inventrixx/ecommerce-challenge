import {
    makeRequest
} from '../lib/makeRequest'

export const searchCategories = async categoryId => {
    const response = await makeRequest(`/api/categories/${categoryId}`, 'get', null);
    return response.data;
};
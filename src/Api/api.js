import axios from 'axios';
export function getAllItems() {
    return axios.get('http://demo7822114.mockable.io/getAllFoodItem');
}

import axios from 'axios'

export default (token) => {
    axios.defaults.baseURL = 'http://localhost:3030';
    axios.defaults.headers.common['Authorization'] = token;
}
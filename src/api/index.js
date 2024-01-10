//import axios
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token', token);

const Api = axios.create({
    //set default endpoint API prod
    baseURL: 'https://athayarayamadani.co.id/kreditpensiun-api/'
    // default endpoint API local
    // baseURL: 'http://localhost:8080/'
}) 

export default Api

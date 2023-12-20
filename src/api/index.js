//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API
    // baseURL: 'https://athayarayamadani.co.id/kreditpensiun-api/'
    baseURL: 'http://localhost:8080/'
}) 

export default Api
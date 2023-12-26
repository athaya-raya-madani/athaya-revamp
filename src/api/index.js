//import axios
import axios from 'axios';

const Api = axios.create({
    //set default endpoint API prod
    // baseURL: 'https://athayarayamadani.co.id/kreditpensiun-api/'
    // default endpoint API local
    baseURL: 'http://localhost:8080/'
}) 

export default Api
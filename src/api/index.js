//import axios
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const Api = axios.create({
    //set default endpoint API prod
    baseURL: 'https://athayarayamadani.co.id/kreditpensiun-api/'
    // default endpoint API local
    // baseURL: 'http://localhost:8080/'
}) 

export default Api

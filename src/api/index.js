//import axios
import axios from 'axios';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// axios.defaults.headers.common['Authorization'] = 'Bearer' + localStorage.getItem('token', token);

const Api = axios.create({
    //set default endpoint API prod
    baseURL: 'https://athayarayamadani.co.id/kreditpensiun-api/'
    // default endpoint API local
    // baseURL: 'http://localhost:8080/'
}) 

Api.interceptors.request.use(config => {
    // Modify the headers to include CORS-related headers
    config.headers['Access-Control-Allow-Origin'] = 'https://beautiful-cajeta-90bf33.netlify.app';
    config.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';
    config.headers['Access-Control-Allow-Headers'] = 'Content-Type';
    
    return config;
  }, error => {
    // Do something with request error
    return Promise.reject(error);
  });
  
export default Api

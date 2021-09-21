import axios from 'axios';
import baseUrl from "../constants";

const Axios = axios.create({
  baseURL: baseUrl,
});
Axios.defaults.headers.post['Content-Type'] = 'application/json';
Axios.defaults.headers.patch['Content-Type'] = 'application/json';
Axios.defaults.headers.delete['Content-Type'] = 'application/json';

export default Axios;



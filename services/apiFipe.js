import axios from "axios";

const apiFipe = axios.create({
    baseURL:  'https://parallelum.com.br/fipe/api/v1',  
})

export default apiFipe
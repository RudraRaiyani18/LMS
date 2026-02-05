import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',                           
    headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use((config) => {                             
  const token = sessionStorage.getItem("accessToken");

  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
},(err) =>{
  return Promise.reject(err);
})
export default axiosInstance;
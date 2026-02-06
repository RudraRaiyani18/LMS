import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',                           
    headers: {
    'Content-Type': 'application/json',
  },
});
axiosInstance.interceptors.request.use((config) => {                             
  const accessToken = sessionStorage.getItem("accessToken");

  if(accessToken){
    config.headers.Authorization = `Bearer ${accessToken} || ""`;
  }

  return config;
},(err) =>{
  return Promise.reject(err);
})

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response:', response.config.url, response.data);
    return response;
  },
  (error) => {
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message
    });
    return Promise.reject(error);
  }
);


export default axiosInstance;
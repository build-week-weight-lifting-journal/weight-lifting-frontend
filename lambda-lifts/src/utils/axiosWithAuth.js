import axios from 'axios'; 

export const axiosWithAuth = () => {

    // auth token 
    const token = localStorage.getItem('token');
    
    return axios.create({
        headers: {
        Authorization: token
        }
    });
};
  

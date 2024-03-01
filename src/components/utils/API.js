import axios from 'axios';

const BASE_URL = 'https://staging.mazaady.com/api/v1';

export const readAll = async (path) => {
    
        try {
            const token = localStorage.getItem("accessToken");
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const response = await authAxios.get(`${BASE_URL}${path}`)
            return response.data;
        } catch (err) {
            return err;
        }
    
  }
  
 
import axios from 'axios';

const BASE_URL = 'https://staging.mazaady.com/api/v1';
const Token = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16';

export const readAll = async (path) => {
    
        try {
            const authAxios = axios.create({
                headers: {
                    'Accept': 'application/json',
                    'private-key': `${Token}`
                }
            })
            const response = await authAxios.get(`${BASE_URL}${path}`)
            return response.data;
        } catch (err) {
            return err;
        }
    
  }
  
 
import axios from 'axios' ;

// axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL:  'https://pro-api.coinmarketcap.com',
    headers:{
        'X-Requested-With': 'XMLHttpRequest',
        'X-CMC_PRO_API_KEY': '00751bb4-015d-4c6c-800c-cac0f79fd112',
        // 'Access-Control-Allow-Origin': 'https://pro-api.coinmarketcap.com',
        // 'Content-Type': 'application/json',
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization",
    }


});

// http://localhost:3999/api/
//

export default instance;
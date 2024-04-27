import axios from './axious-url';

interface Data {
  data: Object
}

export const getCurrentCryptoList = async(link) => {
  let response = {data: {}};
  // return new Promise(async(resolve, reject) => {
    try {
      // let qs = `?start=1&limit=5000&convert=USD`
      response = await axios.get(link);

    } catch (ex) {
      console.log(ex);
      // reject(ex);

    }
    if (response) {
      // success
      const json = response.data;
      return json
      // resolve(json);
    }
  // )
}
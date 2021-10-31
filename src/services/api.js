import axios from "axios";
const URL_BASE = "http://177.84.146.212:9999/";

export const api = axios.create({
  baseURL: 'http://177.84.146.212:9999/',
})


export const getAllStructure = async () => {
  return await axios
    .get(`${URL_BASE}diagram`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getLevel = (setNiveis) => {
  axios
    .get(`${URL_BASE}level`)
    .then((res) => {
      setNiveis(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getDetails = (id, setInfo) => {
  axios
    .get(`${URL_BASE}/objectdetail/${id}`)
    .then((res) => {
      setInfo(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
//id o PobjetoId

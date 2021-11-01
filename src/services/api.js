import axios from "axios";
const URL_BASE = "http://10.10.30.44:999/";

export const api = axios.create({
  baseURL: 'http://10.10.30.44:999/',
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

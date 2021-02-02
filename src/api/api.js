import axios from "axios";

const token = localStorage.getItem("token");

axios.defaults.headers.common = {
  Authorization: `Bearer ${(token && token) || ""}`,
  "Content-Type": "application/json",
  Accept: "application/json",
};

const base_url = "https://swin-api.azurewebsites.net/api/";

const create = (url, newObject) => {
  return axios
    .post(base_url + url, newObject)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        alert(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

const get = (url, newObject) => {
  return axios
    .get(base_url + url, { params: newObject })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      if (err.response) {
        return err.response.data;
      } else {
        alert(err.message);
      }
      //throw new Error(err.response.data.message);
    });
};

export default { create, get };

import axios from "axios";

const base_url =
  "https://fierce-shore-33740.herokuapp.com/https://swin-api.azurewebsites.net/api/";

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

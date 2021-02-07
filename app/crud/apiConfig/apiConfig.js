import axios from "axios";

import { API_URL } from "../../constant/api/apiConstants";

const initApi = (setAccessHeader = true, setRefreshToken = false) => {
  // if (setAccessHeader) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${getStorage("token")}`;
  // }
  //axios.defaults.header.common['content/type']
  axios.defaults.baseURL = API_URL;

  return axios;
};

export default initApi;

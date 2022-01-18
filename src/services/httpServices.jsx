import axios from "axios";

const httpURL = "https://jsonplaceholder.typicode.com/users";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

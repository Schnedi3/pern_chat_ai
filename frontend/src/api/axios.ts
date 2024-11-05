import axios from "axios";

const baseURL = "http://localhost:4000/api";
const customAxios = axios.create({ baseURL });

export default customAxios;

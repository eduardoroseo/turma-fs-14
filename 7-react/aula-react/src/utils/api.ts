import axios from "axios";

const configuracao = {
  baseURL: "http://localhost:3000/",
};

export const api = axios.create(configuracao);

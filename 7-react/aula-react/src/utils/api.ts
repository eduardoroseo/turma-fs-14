import axios from "axios";

const configuracao = {
  baseURL:
    "https://laughing-space-waddle-jjvvqxgpp5qfjpwp-3000.app.github.dev/",
};

export const api = axios.create(configuracao);

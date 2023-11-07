import axios from "axios";

export const BASE_URL = "https://0001.uz"

export const auth_api = {
    register: (body) => axios.post(BASE_URL + "/signup" , body)
}
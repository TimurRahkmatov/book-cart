import {BASE_URL} from "./user.api"
import axios from "axios"

export const book_api = {
    getAllBooks: () => axios.get(BASE_URL + "/books" , {headers: {'Sign': "3230125c9ba3c4872fee111b81c18901" , "Key": "sdsfdsdfs"}}) 
} 
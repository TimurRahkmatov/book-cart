import { SignBookget } from "../constains/hash"
import {BASE_URL} from "./user.api"
import axios from "axios"


const key = localStorage.getItem("Key")


export const book_api = {
    getAllBooks: () => axios.get(BASE_URL + "/books" , {headers: {'Sign': "3230125c9ba3c4872fee111b81c18901" , "Key": "sdsfdsdfs"}}) 
} 
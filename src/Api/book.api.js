import {BASE_URL} from "./user.api"
import axios from "axios"


export const book_api = {
    getAllBooks: () => axios.get(BASE_URL + "/books") 
} 
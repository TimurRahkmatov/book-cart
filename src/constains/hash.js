import Crypto from "crypto-js"
export const  KEY = localStorage.getItem("Key");
export const  SECRET = localStorage.getItem("SecretKey");



// Get all books
export const HASH_GET_BOOKS = Crypto.MD5("GET/books" + SECRET).toString();


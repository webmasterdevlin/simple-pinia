import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const api = axios.create({ baseURL });

export const ENDPOINTS = {
  users: "users",
  posts: "posts",
};

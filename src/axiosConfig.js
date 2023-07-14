import axios from "axios";

//Demo

export const baseConfig = axios.create({
	baseURL: "https://jsonplaceholder.typicode.com",
});

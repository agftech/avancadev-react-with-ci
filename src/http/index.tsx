import axios from "axios";

const apiKey = process.env.REACT_API_KEY;

export const cryptoHttp = axios.create({
	baseURL: "https://min-api.cryptocompare.com/data",
	headers: {
		authorization: `Apikey ${apiKey}`,
	},
});

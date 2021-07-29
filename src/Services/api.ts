import axios from "axios";
import ProductApiModel from "../Models/ProductApiModel";
import SuggestionGroupModel from "../Models/SuggestionGroupModel";

const BASE_URL = "http://localhost:3000";
const PRODUCTS_URL = "/api/products";

export const getProductSuggestions = async (query: string): Promise<SuggestionGroupModel[]> => {
	if (query.trim().length < 1) {
		return [];
	}

	const results = (await api.get<ProductApiModel[]>(`${PRODUCTS_URL}?q=${query}`)).data;

	return results.map((result) => {
		return {
			category: result.name,
			values: result.products.map((product) => product.name),
		};
	});
};

const api = axios.create({
	baseURL: BASE_URL,
});

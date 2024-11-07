import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const getAllProducts = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data;
};

export const getAllProductId = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);

  return response.data;
};

export const getAllProductImage = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}/image`);
  return response.data;
};

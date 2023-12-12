import { Price, Product } from './definitions';
import { products, prices } from './mocked-data';
import axios, { AxiosError } from 'axios'

const apiClient = axios.create({
	baseURL: process.env.STRIPE_URL,
    headers: {
        'Authorization': 'Bearer ' + process.env.STRIPE_PRIVATE_KEY
    }
});

export async function fetchProducts() {
    try {
        console.log('Fetching Products data...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate slow fetch
        console.log('Data fetch complete after 3 seconds.');
        const data = await apiClient.get("/v1/products");
        console.log(data);
        return products;
    } catch(e) {
        const error = e as AxiosError;
        if(error.response) {
            let { data } = error.response;
            console.log(data, ' error');
        }
        // console.error('Database Error:', error);
        throw new Error('Failed to fetch product data.');
    }
}

export async function fetchPrices() {
    try {
        console.log('Fetching Prices data...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate slow fetch
        console.log('Data fetch complete after 3 seconds.');

        return prices;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch prices data.');
    }
}

export async function fetchProductsAndPrices() {
    try {
        // console.log('Fetching AllProduct data...');
        // await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate slow fetch
        // console.log('Data fetch complete after 3 seconds.');
        let productList:Product[] = [];
        let priceList:Price[] = [];
        
        const products = await fetchProducts();
        const prices = await fetchPrices();

        productList = [...products.data];
        priceList = [...prices.data];
        // console.log(productList, 'productList')
        

        return {
            productList: productList,
            priceList: priceList
        };
    } catch(error) {
        console.error('Database Error:', error);
        // throw new Error('Failed to fetch prices data.');
    }
}
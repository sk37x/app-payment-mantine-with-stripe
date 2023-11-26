import { Product } from './definitions';
import { products, prices } from './mocked-data';

export async function fetchProducts() {
    try {
        console.log('Fetching Products data...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate slow fetch
        console.log('Data fetch complete after 3 seconds.');

        return products;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch prices data.');
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

export async function fetchProductsPrices() {
    try {
        console.log('Fetching AllProduct data...');
        await new Promise((resolve) => setTimeout(resolve, 3000)); // simulate slow fetch
        console.log('Data fetch complete after 3 seconds.');
        let productList:Product[] = [];
        
        const products = await fetchProducts();
        const prices = await fetchPrices();

        productList = [...products.data];
        console.log(productList, 'productList')
        

        
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch prices data.');
    }
}
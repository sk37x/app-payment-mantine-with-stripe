import { fetchProductsAndPrices } from '@/app/lib/data';
import { Box, Title } from '@mantine/core';
import React from 'react';

const ShopPage = async (props:{}) => {
    const products = await fetchProductsAndPrices();
    // console.log(products);
    
    return (
        <Box w='100%'>
            <Title>Shop Page</Title>
        </Box>
    )
};

export default ShopPage
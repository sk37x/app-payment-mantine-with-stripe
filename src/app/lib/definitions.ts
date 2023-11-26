import { ReactNode } from 'react';

export interface menu {
    title: string;
    url: string;
    icon: ReactNode | null;
    active: boolean
}

export interface Product {
    id: string;
    object: string;
    active: boolean;
    attributes: any[]; // You might want to replace 'any' with a more specific type if you know the structure of the attributes
    created: number;
    default_price: string;
    description: null | string; // Assuming description can be null or a string
    features: any[]; // Replace 'any' with the actual type of features if possible
    images: string[];
    livemode: boolean;
    metadata: Record<string, any>; // Replace 'any' with the actual type of metadata if possible
    name: string;
    package_dimensions: null; // You might want to replace 'null' with a more specific type if package_dimensions have a structure
    shippable: null; // You might want to replace 'null' with a more specific type if shippable has a structure
    statement_descriptor: null | string; // Assuming statement_descriptor can be null or a string
    tax_code: null; // Replace 'null' with the actual type if tax_code has a structure
    type: string;
    unit_label: null; // Replace 'null' with the actual type if unit_label has a structure
    updated: number;
    url: null; // Assuming url can be null or a string
}
  
export interface Price {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    custom_unit_amount: null | number; // Assuming custom_unit_amount can be null or a number
    livemode: boolean;
    lookup_key: null | string; // Assuming lookup_key can be null or a string
    metadata: Record<string, any>; // Replace 'any' with the actual type of metadata if possible
    nickname: null | string; // Assuming nickname can be null or a string
    product: string;
    recurring: null; // Replace 'null' with the actual type if recurring has a structure
    tax_behavior: string;
    tiers_mode: null; // Replace 'null' with the actual type if tiers_mode has a structure
    transform_quantity: null; // Replace 'null' with the actual type if transform_quantity has a structure
    type: string;
    unit_amount: number;
    unit_amount_decimal: string;
  }


export interface ProductList {
    object: string;
    data: Product[];
    has_more: boolean;
    url: string;
}

export interface PriceList {
    object: string;
    data: Price[];
    has_more: boolean;
    url: string;
}
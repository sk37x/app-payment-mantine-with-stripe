import { PriceList, ProductList } from "./definitions"

const products:ProductList = {
    "object": "list",
    "data": [
        {
            "id": "prod_P4nmdPWasImrLe",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1700989112,
            "default_price": "price_1OGeAfCEcu60vwBAyMlsHGCI",
            "description": null,
            "features": [],
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xTkYwM3ZDRWN1NjB2d0JBfGZsX3Rlc3RfdW85UURiZ25lb0dqamVHQUw1eTJuWm5I00EPPKdHMS"
            ],
            "livemode": false,
            "metadata": {},
            "name": "Yogurt Parfait",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1700989113,
            "url": null
        },
        {
            "id": "prod_P4Wlx651ifv9IB",
            "object": "product",
            "active": true,
            "attributes": [],
            "created": 1700925835,
            "default_price": "price_1OGNi3CEcu60vwBAJ1EOYDGs",
            "description": null,
            "features": [],
            "images": [
                "https://files.stripe.com/links/MDB8YWNjdF8xTkYwM3ZDRWN1NjB2d0JBfGZsX3Rlc3RfZDlEdFpPWGxxNm1pUnpnWUNWM3o2bjd500p7F3lbMY"
            ],
            "livemode": false,
            "metadata": {},
            "name": "Milk Shake",
            "package_dimensions": null,
            "shippable": null,
            "statement_descriptor": null,
            "tax_code": null,
            "type": "service",
            "unit_label": null,
            "updated": 1700925836,
            "url": null
        }
    ],
    "has_more": false,
    "url": "/v1/products"
}

const prices: PriceList = {
    "object": "list",
    "data": [
        {
            "id": "price_1OGeAfCEcu60vwBAyMlsHGCI",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1700989113,
            "currency": "thb",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_P4nmdPWasImrLe",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 20000,
            "unit_amount_decimal": "20000"
        },
        {
            "id": "price_1OGNi3CEcu60vwBAJ1EOYDGs",
            "object": "price",
            "active": true,
            "billing_scheme": "per_unit",
            "created": 1700925835,
            "currency": "thb",
            "custom_unit_amount": null,
            "livemode": false,
            "lookup_key": null,
            "metadata": {},
            "nickname": null,
            "product": "prod_P4Wlx651ifv9IB",
            "recurring": null,
            "tax_behavior": "unspecified",
            "tiers_mode": null,
            "transform_quantity": null,
            "type": "one_time",
            "unit_amount": 10000,
            "unit_amount_decimal": "10000"
        }
    ],
    "has_more": false,
    "url": "/v1/prices"
}

export {
    products,
    prices
}
import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    brand: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    sale: {inSale: true, salePrice: 3000},
    instock: true,
    picture: ""
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    brand: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    sale: {inSale: true, salePrice: 3000},
    instock: true,
    picture: ""
  },
  {
    _id: uuid(),
    title: "You Can WIN",
    brand: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    sale: {inSale: true, salePrice: 3000},
    instock: true,
    picture: ""
  },
];

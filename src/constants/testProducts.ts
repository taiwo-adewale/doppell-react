import iPhone14 from "/assets/iphone 14 pro max.jpg";
import samsungS22 from "/assets/samsung s22 ultra.jpg";
import hpSpectre from "/assets/HP spectre 15 x360.jpg";
import beatsHeadphones from "/assets/beats headphones.jpg";

export type Product = {
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
};

export const testProducts: Product[] = [
  {
    name: "Samsung S22 ultra",
    slug: "samsung-s22-ultra",
    image: samsungS22,
    price: 1159.99,
    quantity: 1,
  },
  {
    name: "Beats Headphones",
    slug: "beats-headphones",
    image: beatsHeadphones,
    price: 73.45,
    quantity: 3,
  },
  {
    name: "iPhone 14 Pro Max",
    slug: "iphone-14-pro-max",
    image: iPhone14,
    price: 1299.99,
    quantity: 1,
  },
  {
    name: "HP Spectre 15 x360",
    slug: "hp-spectre-15-x360",
    image: hpSpectre,
    price: 1299.99,
    quantity: 1,
  },
];

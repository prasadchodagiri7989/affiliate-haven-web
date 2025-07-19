import headphonesImg from '@/assets/product-headphones.jpg';
import smartwatchImg from '@/assets/product-smartwatch.jpg';
import backpackImg from '@/assets/product-backpack.jpg';
import shoesImg from '@/assets/product-shoes.jpg';
import lampImg from '@/assets/product-lamp.jpg';
import speakerImg from '@/assets/product-speaker.jpg';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  amazonUrl: string;
  flipkartUrl: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 2340,
    image: headphonesImg,
    category: "Electronics",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality."
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 249.99,
    originalPrice: 299.99,
    rating: 4.6,
    reviews: 1876,
    image: smartwatchImg,
    category: "Electronics",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "Advanced smartwatch with health tracking, GPS, and water resistance."
  },
  {
    id: 3,
    name: "Leather Travel Backpack",
    price: 89.99,
    originalPrice: 139.99,
    rating: 4.7,
    reviews: 943,
    image: backpackImg,
    category: "Fashion",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "Stylish and durable leather backpack perfect for travel and daily use."
  },
  {
    id: 4,
    name: "Premium Running Shoes",
    price: 119.99,
    originalPrice: 159.99,
    rating: 4.9,
    reviews: 3201,
    image: shoesImg,
    category: "Fashion",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "Comfortable and lightweight running shoes with advanced cushioning technology."
  },
  {
    id: 5,
    name: "Modern Desk Lamp",
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.5,
    reviews: 567,
    image: lampImg,
    category: "Home",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "Adjustable LED desk lamp with multiple brightness levels and modern design."
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 79.99,
    originalPrice: 119.99,
    rating: 4.4,
    reviews: 1298,
    image: speakerImg,
    category: "Electronics",
    amazonUrl: "#",
    flipkartUrl: "#",
    description: "Portable wireless speaker with powerful bass and long battery life."
  }
];

export const categories = [
  { name: "All", value: "" },
  { name: "Electronics", value: "Electronics" },
  { name: "Fashion", value: "Fashion" },
  { name: "Home", value: "Home" }
];
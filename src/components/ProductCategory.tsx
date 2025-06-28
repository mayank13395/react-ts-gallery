import React from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "../utils/types";

type ProductCategoryProps = {
  category: string;
  products: IProduct[];
};

const ProductCategory: React.FC<ProductCategoryProps> = ({ category, products }) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </div>
);

export default ProductCategory;

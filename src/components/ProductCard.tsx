import React from "react";
import { IProduct } from "../utils/types";

type ProductCardProps = {
  product: IProduct;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, image, price, category, id } = product;

  return (
    <div className="border rounded-xl p-4 shadow hover:shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-2"
      />
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-green-600 font-bold">${price}</p>
      <p className="text-sm text-gray-500">Category: {category}</p>
      <p className="text-xs text-gray-400">ID: {id}</p>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";
import { IProduct } from "../utils/types";

type GroupedProducts = {
  [category: string]: IProduct[];
};

const ProductGallery: React.FC = () => {
  const [groupedProducts, setGroupedProducts] = useState<GroupedProducts>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = "https://fakestoreapi.com/products";
        const response = await axios.get<IProduct[]>(url);

        const grouped = response.data.reduce(
          (acc: GroupedProducts, product: IProduct) => {
            if (!acc[product.category]) {
              acc[product.category] = [];
            }
            acc[product.category].push(product);
            return acc;
          },
          {}
        );

        setGroupedProducts(grouped);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="p-6 space-y-8">
      {Object.entries(groupedProducts).map(([category, products]) => (
        <ProductCategory
          key={category}
          category={category}
          products={products}
        />
      ))}
    </div>
  );
};

export default ProductGallery;

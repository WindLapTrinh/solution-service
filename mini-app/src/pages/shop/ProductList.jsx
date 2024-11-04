import React from "react";
import { Box } from "zmp-ui";
import ProductItem from "./ProductItem";
import "../../css/shop/productList.css";

// Dữ liệu mẫu sản phẩm
const sampleProducts = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    image: "./images/product/product-1.jpg",
    price: 29490000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 2,
    name: "Chùa đồng",
    image: "./images/product/product-2.jpg",
    price: 29490000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 3,
    name: "Thủ Đô Hà Nội",
    image: "./images/product/product-3.jpg",
    price: 29490000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 4,
    name: "Đỉnh núi Fansipan",
    image: "./images/product/product-4.jpg",
    price: 29490000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 5,
    name: "Du lịch Cao Bằng",
    image: "./images/product/product-5.jpg",
    price: 26990000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 6,
    name: "Du lịch Tràn An",
    image: "./images/product/product-6.jpg",
    price: 26990000,
    icon: "zi-plus-circle-solid",
  },
];

const ProductList = () => {
  return (
    <Box>
      <Box className="list-product grid grid-cols-2 gap-4">
        {sampleProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;

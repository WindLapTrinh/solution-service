import React from "react";
import { Box, Text, Icon, Tabs } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Import CSS cho Swiper
import "../../css/product/productByCategory.css";

// Dữ liệu mẫu cho danh mục và sản phẩm
const categories = [
  { id: 1, name: "Hà Nội" },
  { id: 2, name: "Bắc Ninh" },
  { id: 3, name: "Tràng An" },
];

const products = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    category: "Hà Nội",
    image: "./images/product/product-1.jpg",
    price: 120000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 2,
    name: "Chùa Đồng",
    category: "Bắc Ninh",
    image: "./images/product/product-2.jpg",
    price: 750000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 3,
    name: "Thủ Đô Hà Nội",
    category: "Hà Nội",
    image: "./images/product/product-3.jpg",
    price: 250000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 4,
    name: "Đỉnh Fansipan",
    category: "Hà Nội",
    image: "./images/product/product-4.jpg",
    price: 1500000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 5,
    name: "Thung Lũng M.Hoa",
    category: "Tràng An",
    image: "./images/product/product-5.jpg",
    price: 450000,
    icon: "zi-plus-circle-solid",
  },
  {
    id: 6,
    name: "Du Lịch Tràng An",
    category: "Tràng An",
    image: "./images/product/product-6.jpg",
    price: 300000,
    icon: "zi-plus-circle-solid",
  },
];

const ProductByCategory = () => {
  const navigate = useNavigate();

  const handleDetailProduct = (product) => {
    navigate("/detailProduct", { state: { product } });
  };

  return (
    <Box className="product-category-container">
      <Box className="header-product">
        <img className="img-saler" src="./images/icon/maps.png" alt="" />
        <Text.Title size="small" className="category-title">
          Bạn muốn đi đâu ?
        </Text.Title>
      </Box>
      <Box className="tabs-wrapper">
        <Tabs className="horizontal-tabs" id="category-list" scrollable>
          {categories.map((category) => (
            <Tabs.Tab key={category.id} label={category.name}>
              <Box className="slider-container">
                <Swiper spaceBetween={10} slidesPerView={2.5}>
                  {products
                    .filter((product) => product.category === category.name) // Lọc sản phẩm theo danh mục
                    .map((product) => (
                      <SwiperSlide key={product.id}>
                        <Box
                          className="product-item"
                          onClick={() => handleDetailProduct(product)}
                        >
                          <Box className="image-container">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="product-image"
                            />
                          </Box>
                          <Text className="product-name">{product.name}</Text>
                          <Box className="footer-product">
                            <Text size="small" className="product-price">
                              {product.price.toLocaleString("vi-VN")} đ
                            </Text>
                            <Icon
                              className="add-to-cart-icon"
                              icon={product.icon}
                            />
                          </Box>
                        </Box>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </Box>
            </Tabs.Tab>
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default ProductByCategory;

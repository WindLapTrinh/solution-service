import React from "react";
import { Box, Text } from "zmp-ui";
import "../../css/home/specialOffer.css";

const specialOffers = [
  {
    id: 1,
    name: "Đây được xem là xu hướng thiết kế truyền thống với nhiều hiệu quả nổi bật và vẫn được áp dụng rất phổ biến ở thời điểm hiện tại. không chỉ đối với ngành du lịch",
    image: "./images/saler/saler-1.jpg",
    price: "118.000",
  },
  {
    id: 2,
    name: "Đây được xem là xu hướng thiết kế truyền thống với nhiều hiệu quả nổi bật và vẫn được áp dụng rất phổ biến ở thời điểm hiện tại. không chỉ đối với ngành du lịch",
    image: "./images/saler/saler-2.jpg",
    price: "158.000",
  },
  {
    id: 3,
    name: "Đây được xem là xu hướng thiết kế truyền thống với nhiều hiệu quả nổi bật và vẫn được áp dụng rất phổ biến ở thời điểm hiện tại. không chỉ đối với ngành du lịch",
    image: "./images/saler/saler-3.jpg",
    price: "198.000",
  },
];

const SpecialOffer = () => {
  return (
    <Box className="special-offer">
      <Box className="header-special-offer mb-4">
        <div className="infomation-sale">
          <div className="icon-product-today">
            <img className="img-saler" src="./images/icon/saler.png" alt="" />
          </div>
          <Text.Title size="small" className="title-product">
            Khuyến mãi hôm nay
          </Text.Title>
        </div>
      </Box>
      <Box mt={2} className="body-special-offer">
        <Box className="slider-special-offer p-4">
          {specialOffers.map((specialOffer) => (
            <div
              key={specialOffer.id}
              className="custom-slider-item flex flex-col space-y-2 item-special-offer"
            >
              <img
                className="image-special-offer"
                src={specialOffer.image}
                alt={specialOffer.name}
              />
                <Text size="xxSmall" className="name-special-offer">
                  {specialOffer.name}
                </Text>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SpecialOffer;

import React from "react";
import { Box, Text } from "zmp-ui";
import "../../css/function/home.css"
const Home = () => {
  const categories = [
    { id: 1, name: "Đặt lịch", icon: "./images/icon/booking.png" },
    { id: 2, name: "Liệu trình", icon: "./images/icon/protect.png" },
    { id: 3, name: "Ví Voucher", icon: "./images/icon/voucher.png" },
    { id: 4, name: "Đổi thưởng", icon: "./images/icon/reward.png" },
    { id: 5, name: "Hạng thành viên", icon: "./images/icon/level.png" },
    { id: 6, name: "Tích điểm", icon: "./images/icon/star.png" },
    { id: 7, name: "Chăm sóc khách hàng", icon: "./images/icon/customer-care.png" },
    { id: 8, name: "Xem dịch vụ", icon: "./images/icon/cart.png" },
  ];

  return (
    <Box className="box-function">
      <Box className="categories-grid">
        {categories.map((category) => (
          <Box key={category.id} className="category-item">
            <Box className="icon">
              <img src={category.icon} alt={category.name} />
            </Box>
            <Text className="category-name">{category.name}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;

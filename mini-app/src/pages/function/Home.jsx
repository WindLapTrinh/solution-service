import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text } from "zmp-ui";
import "../../css/function/home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClickBooking = () => {
    navigate("/booking");
  }
  return (
    <Box className="box-function">
      <Box className="categories-grid">
        <Box className="category-item" onClick={() => handleClickBooking()}>
          <Box className="icon">
            <img src="./images/icon/booking.png" alt="Đặt lịch" />
          </Box>
          <Text className="category-name">Đặt lịch</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/protect.png" alt="Liệu trình" />
          </Box>
          <Text className="category-name">Liệu trình</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/voucher.png" alt="Ví Voucher" />
          </Box>
          <Text className="category-name">Ví Voucher</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/reward.png" alt="Đổi thưởng" />
          </Box>
          <Text className="category-name">Đổi thưởng</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/level.png" alt="Hạng thành viên" />
          </Box>
          <Text className="category-name">Hạng thành viên</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/star.png" alt="Tích điểm" />
          </Box>
          <Text className="category-name">Tích điểm</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/customer-care.png" alt="Chăm sóc khách hàng" />
          </Box>
          <Text className="category-name">Chăm sóc khách hàng</Text>
        </Box>
        <Box className="category-item">
          <Box className="icon">
            <img src="./images/icon/cart.png" alt="Xem dịch vụ" />
          </Box>
          <Text className="category-name">Xem dịch vụ</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

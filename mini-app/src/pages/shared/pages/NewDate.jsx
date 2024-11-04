import React from "react";
import { Box, Text, Button } from "zmp-ui";
import { useNavigate } from "react-router-dom";
import "../styles/newDate.css";

const NewDate = () => {
    const navigate = useNavigate();
    
  return (
    <Box className="new-date">
      <img className="image-new-date" src="./images/notify/travel.png" alt="Order cart" />
      <Box className="notify-new-date">
        <Text className="text-new-date">Không có lịch đặt tour nào</Text>
        <Text className="text-new-date">Vui lòng tạo lịch đặt tour mới.</Text>
      </Box>
    </Box>
  );
};

export default NewDate;

import React from "react";
import { Box, Text } from "zmp-ui";
import "../../css/contact/home.css";
const Home = () => {
  return (
    <Box className="box-contact">
      <Box className="header-contact">
        <img className="img-saler" src="./images/icon/contact.png" alt="" />
        <Text className="title-contact">Về chúng tôi</Text>
      </Box>
      <Box className="body-contact" mt={2}>
        <Text className="desc-contact">
          Wind Lập Trình là các lập trình viên Gen Z, chúng tôi đồng hành cùng
          nhau trên những năm tháng của tuổi trẻ trãi qua khung bậc cảm súc cùng
          nhau, thứ chúng tôi có đó là nhiệt huyết của tuổi trẻ , tinh thần Gen
          Z, sáng tạo, độc đáo, công nghệ áp dụng mới mẻ.
        </Text>
      </Box>
    </Box>
  );
};
export default Home;

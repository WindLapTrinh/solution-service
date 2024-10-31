import React from "react";
import { Box, Text, Tabs, Button } from "zmp-ui";
import CustomHeader from "../shared/pages/CustomHeader";
import "../../css/booking/home.css";

const Home = () => {
  return (
    <Box className="box-booking">
      <CustomHeader title={"Quản lý đặt lịch"} showBackIcon={true} />
      <Box className="detail-booking">
        <Tabs className="horizontal-tabs" id="contact-list" scrollable="true">
          <Tabs.Tab key="tab1" label="Tất cả">
            <Box className="tab-content">
              <p>Hiện tại chưa có lịch đăng ký nào</p>
              {/* Thêm nội dung dài vào đây để kiểm tra cuộn */}
            </Box>
          </Tabs.Tab>
          <Tabs.Tab key="tab2" label="Lịch sử">
            <Box className="tab-content">
              {/* Nội dung dài khác */}
            </Box>
          </Tabs.Tab>
        </Tabs>
      </Box>

      <Box className="footer-booking">
        <Button fullWidth>Tạo lịch hẹn mới</Button>
      </Box>
    </Box>
  );
};

export default Home;

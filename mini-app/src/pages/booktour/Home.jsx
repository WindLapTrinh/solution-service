import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Tabs, Button } from "zmp-ui";
import CustomHeader from "../shared/pages/CustomHeader";
import NewDate from "../shared/pages/NewDate";
import "../../css/booktour/home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleOncickNewTour = () => {
    navigate("/newtour");
  };
  return (
    <Box className="box-booking">
      <CustomHeader title={"Quản lý đặt lịch"} showBackIcon={true} />
      <Box className="detail-booking">
        <Tabs className="horizontal-tabs" id="contact-list">
          <Tabs.Tab key="tab1" label="Tất cả">
            <Box className="tab-content">
              <NewDate />
            </Box>
          </Tabs.Tab>
          <Tabs.Tab key="tab2" label="Lịch sử">
            <Box className="tab-content">
              <NewDate />
            </Box>
          </Tabs.Tab>
        </Tabs>
      </Box>

      <Box className="footer-booking">
        <Button
          fullWidth
          className="btn-new-date"
          onClick={() => handleOncickNewTour()}
        >
          Tạo lịch hẹn mới
        </Button>
      </Box>
    </Box>
  );
};

export default Home;

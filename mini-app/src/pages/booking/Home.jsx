import React from "react";
import { Box, Text, Tabs } from "zmp-ui";
import CustomHeader from "../shared/pages/CustomHeader";
const Home = () => {
    return(
        <Box className="box-booking">
            <CustomHeader title={"Quản lý đặt lịch"}/>
            <Box className="detail-booking">
            <Tabs className="horizontal-tabs" id="contact-list" scrollable="true">
              <Tabs.Tab key="tab1" label="Tất cả">

              </Tabs.Tab>
              <Tabs.Tab key="tab2" label="Lịch sử">

              </Tabs.Tab>
            </Tabs>
            </Box>
            <Box className="footer-booking">
                <Button>Tạo lịch hẹn mới</Button>
            </Box>
        </Box>
    )
}
export default Home;
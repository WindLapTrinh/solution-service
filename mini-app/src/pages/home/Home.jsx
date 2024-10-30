import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BottomNavigation,
  Box,
  Icon,
  Page,
  Sheet,
  Swiper,
  Text,
  Input,
} from "zmp-ui";
import CustomBottomNavigation from "@/pages/shared/components/CustomBottomNavigation";
import CustomHeader from "../shared/pages/CustomHeader";
import Introduce from "./Introduce";
import Function from "../function/Home";
import SpecialOffer from "./SpecialOffer";
const Home = (props) => {
  const navigate = useNavigate();

  return (
    <Box>
      <CustomHeader
        title={"Nguyễn Thanh Phong"}
        subtitle={"Thành viên"}
        levelAccount={"0"}
        imageUrl={"./images/logo/anhdaidien_2.jpg"}
      />
      <Page className="home">
        <Introduce/>
        <Function/>
        <SpecialOffer/>
      </Page>
      <CustomBottomNavigation />
    </Box>
  );
};

export default Home;

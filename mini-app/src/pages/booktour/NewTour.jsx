import React, { useState } from "react";
import {
  Box,
  Text,
  Button,
  Input,
  Icon,
  Select,
  DatePicker,
  Sheet,
} from "zmp-ui";
import { FaMinus } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";
import CustomHeader from "../shared/pages/CustomHeader";
import "../../css/booktour/newtour.css";

const BookTour = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [branch, setBranch] = useState("Misscare");
  const [selectedService, setSelectedService] = useState(null);
  const [date, setDate] = useState(null);
  const [sheetVisible, setSheetVisible] = useState(false);
  const [actionSheetVisible, setActionSheetVisible] = useState(false);
  return (
    <Box className="book-tour">
      <CustomHeader title={"Tạo lịch hẹn"} showBackIcon={true} />
      <Box className="header">
        <img
          src="./images/banner/banner-1.jpg"
          alt="Banner"
          className="banner-image"
        />
        <Box className="branch-info">
          <Text className="branch-name">Misscare</Text>
          <Text className="branch-address">
            245 Phố Cơ Điện, Phường 02, Quận Bình Thạnh, TP.HCM
          </Text>
        </Box>
      </Box>

      <Box className="people-counter">
        <Box className="box-title-people">
          <Text className="title-people">Số người</Text>
        </Box>
        <Box className="counter-controls">
          <Button
            icon={<FaMinus className="icon-minus" />}
            disabled={numPeople <= 1}
            onClick={() => setNumPeople(numPeople - 1)}
            className="btn-num-people"
          />
          <Text className="num-people">{numPeople}</Text>
          <Button
            icon={<Icon icon="zi-plus" />}
            onClick={() => setNumPeople(numPeople + 1)}
            className="btn-num-people"
          />
        </Box>
      </Box>

      <Box className="steps">
        <Box className="step">
          <Text className="step-number">1. Chọn tour</Text>
          <Box className="service-info">
            <Icon icon="zi-location" className="service-icon" />
            <Text className="service-message">
              Tiếp theo bạn hãy chọn những tour mà bạn muốn đi
            </Text>
          </Box>
          <Button className="view-all-services">Xem tất cả tour</Button>
        </Box>

        {/* Bước 3: Chọn ngày giờ */}
        <Box className="step">
          <Text className="step-number">2. Chọn ngày, giờ bạn khởi hành</Text>
          <DatePicker
            placeholder="Chọn ngày thực hiện"
            value={date}
            onChange={(newDate) => setDate(newDate)}
          />
        </Box>
      </Box>
      <Box className="submit-section">
        <Box className="header-submit-section">
            <BsMessenger className="icon-submit-section"/>
            <Text className="title-chat">Chat ngay</Text>
        </Box >
          <Button className="body-submit-section" fullWidth disabled={!selectedService || !date}>
            Tiếp tục
          </Button>
      </Box>
    </Box>
  );
};

export default BookTour;

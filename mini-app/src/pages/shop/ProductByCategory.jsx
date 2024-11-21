import React, { useState } from "react";
import { Box, Tabs } from "zmp-ui";
import ProductList from "./ProductList";
import "../../css/shop/productByCategory.css";
import CustomHeader from "../shared/pages/CustomHeader";
import CustomBottomNavigation from "../shared/components/CustomBottomNavigation"
const ProductByCategory = ({ categories, gotoCategory }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box>
      <CustomHeader title={"Danh sách tour"} showBackIcon={true}/>
      <Box className="by-product">
        <Box className="category-by">
          <Box className="slider-by bg-white p-4">
            <div className="tabs-wrapper">
              <Tabs
                className="horizontal-tabs"
                id="contact-list"
                scrollable="true"
              >
                <Tabs.Tab key="tab1" label="Việt Nam">
                  <ProductList />
                </Tabs.Tab>
                <Tabs.Tab key="tab2" label="Nhật bản">
                  <ProductList />
                </Tabs.Tab>
                <Tabs.Tab key="tab3" label="Hàn Quốc">
                  <ProductList />
                </Tabs.Tab>
                <Tabs.Tab key="tab4" label="Đài Loan">
                  <ProductList />
                </Tabs.Tab>
                <Tabs.Tab key="tab5" label="Thái Lan">
                  <ProductList />
                </Tabs.Tab>
              </Tabs>
            </div>
          </Box>
        </Box>
      </Box>
      <CustomBottomNavigation/>
    </Box>
  );
};

export default ProductByCategory;

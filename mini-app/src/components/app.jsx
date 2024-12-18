import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui"; // Bỏ AnimationRoutes
import { RecoilRoot } from "recoil";

import Home from "../pages/home/Home.jsx";
import Booktour from "../pages/booktour/Home.jsx";
import Newtour from "../pages/booktour/NewTour.jsx";
import Product from "../pages/shop/ProductByCategory.jsx";
import DetailProduct from "../pages/shop/ProductDetail.jsx"

import { CartProvider } from "../pages/shared/common/cart/CartContext";
import { PaymentProvider } from "../pages/shared/common/payment/PaymentContext";
import { AddressProvider } from "../pages/shared/common/cart/AddressContext.jsx";

import "../pages/shared/styles/app.css";

const MyApp = () => {
  const [tasks, setTasks] = useState([]);
  
  return (
    <RecoilRoot>
      <CartProvider>
        <AddressProvider>
          <PaymentProvider>
            <App>
              <SnackbarProvider>
                <ZMPRouter>
                  <Routes>
                    <Route path="/" element={<Home setTasks={setTasks} tasks={tasks} />} />
                    <Route path="/booktour" element={<Booktour setTasks={setTasks} tasks={tasks} />} />
                    <Route path="/newtour" element={<Newtour setTasks={setTasks} tasks={tasks} />} />
                    <Route path="/product" element={<Product setTasks={setTasks} tasks={tasks} />} />
                    <Route path="/detailProduct" element={<DetailProduct setTasks={setTasks} tasks={tasks} />} />

                  </Routes>
                </ZMPRouter>
              </SnackbarProvider>
            </App>
          </PaymentProvider>
        </AddressProvider>
      </CartProvider>
    </RecoilRoot>
  );
};

export default MyApp;

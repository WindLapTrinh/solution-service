import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App, ZMPRouter, SnackbarProvider } from "zmp-ui"; // Bỏ AnimationRoutes
import { RecoilRoot } from "recoil";

import Home from "../pages/home/Home.jsx";
import Booking from "../pages/booking/Home.jsx";
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
                    <Route path="/booking" element={<Booking setTasks={setTasks} tasks={tasks} />} />

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

import React from "react";
import Navbar from "../Components/Layout/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

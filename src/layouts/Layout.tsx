import { Outlet } from "react-router-dom";
import React from "react";
import "./Layout.css";

function RootLayout() {
  return (
    <div className="main-layout">
        <div className="red-rectangle"></div>
        <div className="blue-rectangle"></div>
        <div className="green-rectangle"></div>
      <Outlet />
    </div>
  );
}
export default RootLayout;

import React from "react";
import Navbar from "./component/MainPage/components/Navbar";
import Header from "./component/MainPage/components/Header";
import Toprated from "./component/MainPage/components/Toprated";
import Footer from "./component/MainPage/Footer";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Toprated />
      <Footer />
    </div>
  );
};

export default homepage;

import React from "react";
import Navbar from "./component/MainPage/components/Navbar";
import Header from "./component/MainPage/components/Header";
import Toprated from "./component/MainPage/components/Toprated";
import Footer from "./component/MainPage/Footer";
import Service from "./component/service/App-service"
import ServiceTwo from "./component/service2/AppTwo"
import post from "./post"

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <Toprated />
      <ServiceTwo post = {post} />
      <Footer />
    </div>
  );
};

export default homepage;

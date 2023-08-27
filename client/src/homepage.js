import React from "react";
import Navbar from "./component/MainPage/components/Navbar";
import Header from "./component/MainPage/components/Header";
import Toprated from "./component/MainPage/components/Toprated";
import Footer from "./component/MainPage/Footer";
import Beforetoprated from "./component/MainPage/components/Beforetoprated";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Beforetoprated/>
      <Toprated />
      <Footer />
    </div>
  );
};

export default homepage;

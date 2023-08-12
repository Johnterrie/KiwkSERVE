import React from 'react'
import Navbar from "./component/MainPage/components/Navbar";
import Header from "./component/MainPage/components/Header";
import Toprated from "./component/MainPage/components/Toprated";
import Allprofessionals from './allprofessionals';
import Footer from './component/MainPage/Footer';

const homepage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Allprofessionals/>
        <Toprated/>
        <Footer/>
    </div>
  )
}

export default homepage

import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../assets/img/mainlogo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { scroller } from "react-scroll";


const Footer = ({query}) => {
const [sideBar, setSideBar] = useState(false);


const { t } = useTranslation()

const navigate = useNavigate()
const location = useLocation();
const scrollTarget = (target) => scroller.scrollTo(target, {smooth: true, duration: 700 ,offset: -180});


const scrollToPage = async (target) => {
  if (location.pathname !=='/') {
       await navigate('/');
  }
    
  scrollTarget(target);
  if(sideBar){
    setSideBar(false)
  }else{
    return
  }
  
}; 




  return (
    <>
      <div className={query ? "hidden bg-white  justify-between items-center -z-10" : "bg-white flex justify-between items-center -z-10"}>
        <div className="container mx-auto  lg:px-16 pt-20 w-full h-full flex-column lg:flex items-center justify-center lg:justify-between relative pb-24">
        
          <div className="w-full lg:w-[30%] flex justify-center lg:justify-start items-center">
              <Link to="/">
                <img className="w-[250px] mt-4 p-0" src={logo} alt="/" />
              </Link>
            </div>
            <div className="flex items-center absolute left-[40%] gap-24">

            <div className="flex-column justify-center items-center text-center cursor-pointer hidden lg:flex">
              <ul>
                <Link to="web3">
                    <h4>{t("web3dr1")}</h4>
                  </Link>
                  <Link to="usedfor">
                    <h4>{t("web3dr2")}</h4>
                  </Link>
                  <Link to="metaverse">
                    <h4>Metaverse</h4>
                  </Link>
              </ul>
            </div>
            <div className="flex-column justify-end items-center text-center cursor-pointer hidden lg:flex">
              <ul>
              <h4 onClick={()=> {scrollToPage('community')}} className="cursor-pointer">Community</h4>

              <Link to="acep">
                    <h4>A.C.E.P</h4>
              </Link>
              <Link to="contact">
                  <h4>{t("contact")}</h4>
              </Link>
              </ul>
            </div>
            </div>
            <div className="flex items-center lg:justify-start justify-center gap-6 my-4">
              <FacebookIcon
                className="hover:text-[#4267B2] text-[#6c2bf9] cursor-pointer "
                fontSize="large"
              />
              <InstagramIcon
                className="hover:text-[#fb3958] text-[#6c2bf9] cursor-pointer "
                fontSize="large"
              />
              <LinkedInIcon
                className="hover:text-[#0077B5] text-[#6c2bf9] cursor-pointer "
                fontSize="large"
              />
              <YouTubeIcon
                className="hover:text-[#FF0000] text-[#6c2bf9] cursor-pointer "
                fontSize="large"
              />
            </div>
          
     
          <div className="absolute w-full text-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs lg:text-xl">
            <p className="w-full font-light text-sm">
              All rights reserved. Copyright © 2022{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

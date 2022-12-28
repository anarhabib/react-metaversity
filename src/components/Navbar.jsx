import React, { useEffect, useState } from "react";
import gif from "../assets/img/logogif.gif";
import logo from "../assets/img/mainlogo.png";
import { Link , useLocation , useNavigate } from "react-router-dom";
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";
import { US, AZ } from "country-flag-icons/react/3x2";
import "./Navbar.css";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import i18n from "../i18n";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [gifLoading, setGifLoading] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [dropdownpro, setDropdownpro] = useState(false);

  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate()

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

  if(sideBar){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'scroll'

  }

  // const navigate = useNavigate();

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("#navbar");
    const scrollTop = window.scrollY;
    scrollTop > 0
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const handleClick = () => {
    setDropdown(!dropdown ? true : false);
  };

  const handleClickpro = () => {
    setDropdownpro(!dropdownpro ? true : false);
  };

  const handleSideBar = () => {
    setSideBar(!sideBar ? true : false);
    // console.log(sideBar);
  };

  // console.log(sideBar);

  useEffect(() => {
    setTimeout(() => {
      setGifLoading(false);
    }, 5000);
  });

  const changeLang = (lang) => {
    return () => {
      i18n.changeLanguage(lang);
    };
  };

  return (
    <>
      <div
        id="navbar"
        className="bg-transparent fixed w-full transition-all duration-700  h-fit"
      >
        <div className="container mx-auto py-6 lg:px-16 p-4 lg:py-12 relative">
          <div className="flex items-center justify-between">
            <Link to="/">
              <img
                className="w-[150px] lg:w-[250px] absolute  top-7 lg:top-10 md:top-6 lg:left-16"
                src={gifLoading ? gif : logo}
                alt="/"
              />
            </Link>
            <div onClick={handleSideBar} className="xl:hidden mr-4">
              <RxHamburgerMenu size={30} />
            </div>
            <div className="flex-row items-center justify-center hidden xl:flex gap-8">
              <div className="text-[#1361a7] ml-12 text-xl ">
             
                  <h4 onClick={()=> {scrollToPage('community')}} className="cursor-pointer">Community</h4>
              
              </div>
              <div className="cursor-pointer flex items-center justify-center relative text-[#1361a7] ml-12 text-xl group">
                <h4 className="mr-4">WEB 3.0</h4>
                <div className="icon">
                  <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300" />
                </div>
                <div className="absolute bottom-[-50px] left-0 after:content-[*] w-full h-[3px] bg-[#1361a7] pointer-events-none group-hover:pointer-events-auto z-10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute top-[23px] bg-transparent p-4 pt-12 pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100  transition duration-700">
                  <Link to="web3">
                    <p className="bg-white p-8 pt-8 text-center rounded-t-xl">{t("web3dr1")}</p>
                  </Link>
                  <Link to="usedfor">
                    <p className="bg-white p-8 text-center">{t("web3dr2")}</p>
                  </Link>
                  <Link to="metaverse">
                    <p className="bg-white p-8 px-16 rounded-b-xl">Metaverse</p>
                  </Link>
                </div>
              </div>

              <div className="cursor-pointer flex items-center justify-center relative text-[#1361a7] ml-12 text-xl group">
                <h4 className="mr-4">{t("project")}</h4>
                <div className="icon">
                  <IoIosArrowDown className="group-hover:rotate-180 transition-all duration-300" />
                </div>
                <div className="absolute bottom-[-50px] left-0 after:content-[*] w-full h-[3px] pointer-events-none group-hover:pointer-events-auto bg-[#1361a7] z-10 opacity-0 group-hover:opacity-100 transition duration-700"></div>
                <div className="absolute top-[23px] bg-transparent p-4 pt-12 pointer-events-none group-hover:pointer-events-auto  opacity-0 group-hover:opacity-100  transition duration-700">
                  <Link to="acep">
                    <p className="bg-white p-4 pt-8 px-16 pb-8 rounded-xl">A.C.E.P</p>
                  </Link>
                </div>
              </div>
              <div className="text-[#1361a7] ml-12 text-xl ">
                <Link to="contact">
                  <h4>{t("contact")}</h4>
                </Link>
              </div>
              <div className="ml-6 flex items-center justify-between">
                <AZ
                  onClick={changeLang("az")}
                  style={{ cursor: "pointer", width: "30px", height: "30px" }}
                  title="Azerbaijan"
                  className="border-2 rounded-full border-[#1361a7] bg-[#1362a785]"
                />
                <US
                  onClick={changeLang("en")}
                  style={{
                    cursor: "pointer",
                    width: "30px",
                    height: "30px",
                    marginLeft: "25px",
                  }}
                  title="United States"
                  className="border-2 rounded-full border-[#1361a7] bg-[#1362a785]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            sideBar
              ? " py-7 block  bg-white w-full h-[100vh] absolute left-0 top-0 text-black flex-row  items-center justify-center text-xl z-[100] overflow-y-scroll"
              : " bg-black  w-full text-white flex-row items-center justify-center text-3xl hidden z-[100]"
          }
        >
          <div className="flex items-center justify-between container mx-auto px-4">
            <Link
              to="/"
              onClick={(e) => {
                setSideBar(!sideBar);
              }}
            >
              <img src={logo} alt="/" className="w-[150px]" />
            </Link>
            <div onClick={handleSideBar} className="xl:hidden mr-4">
              <AiOutlineClose size={30} />
            </div>
          </div>
          <div
            onClick={(e) => {
              setSideBar(!sideBar);
            }}
            className=" my-10 flex items-center justify-center"
          >
            <AZ
              onClick={changeLang("az")}
              style={{ cursor: "pointer", width: "50px", height: "50px" }}
              title="Azerbaijan"
              className="border-2 rounded-full border-[#1361a7] bg-[#1362a785]"
            />
            <US
              onClick={changeLang("en")}
              style={{
                cursor: "pointer",
                width: "50px",
                height: "50px",
                marginLeft: "50px",
              }}
              title="United States"
              className="border-2 rounded-full border-[#1361a7] bg-[#1362a785]"
              
            />
          </div>
          <ul>
           
      
              <li onClick={()=> {scrollToPage('community')}} className="cursor-pointer my-8 flex justify-center items-center">
                Community
              </li>
         
            <div className="cursor-pointer my-8 flex-column items-center justify-center group">
              <div
                onClick={handleClick}
                className="flex justify-center items-center"
              >
                <li className="flex justify-center items-center mr-4">
                  WEB 3.0
                </li>
                {dropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div
                className={
                  !dropdown
                    ? "hidden flex-column justify-center items-center "
                    : "block flex-column justify-center items-center"
                }
              >
                <Link
                  to="web3"
                  onClick={(e) => {
                    setSideBar(!sideBar);
                  }}
                >
                  <li className="flex items-center justify-center my-4 text-[#1361a7]">
                  {t("web3dr1")}
                  </li>
                </Link>
                <Link
                  to="usedfor"
                  onClick={(e) => {
                    setSideBar(!sideBar);
                  }}
                >
                  <li className="flex items-center justify-center my-4 text-[#1361a7]">
                  {t("web3dr2")}
                  </li>
                </Link>
                <Link
                  to="metaverse"
                  onClick={(e) => {
                    setSideBar(!sideBar);
                  }}
                >
                  <li className="flex items-center justify-center my-4 text-[#1361a7]">
                    Metaverse
                  </li>
                </Link>
              </div>
            </div>

            <div className="cursor-pointer my-8 flex-column items-center justify-center group">
              <div
                onClick={handleClickpro}
                className="flex items-center justify-center"
              >
                <li className="cursor-pointer  flex justify-center items-center mr-4">
                {t("project")}
                </li>
                {dropdownpro ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
              <div
                className={
                  !dropdownpro
                    ? "hidden flex-column justify-center items-center "
                    : "block flex-column justify-center items-center"
                }
              >
                <Link
                  to="acep"
                  onClick={(e) => {
                    setSideBar(!sideBar);
                  }}
                >
                  <li className="flex items-center justify-center my-4 text-[#1361a7]">
                    A.C.E.P
                  </li>
                </Link>
              </div>
            </div>

            <Link
              to="contact"
              onClick={(e) => {
                setSideBar(!sideBar);
              }}
            >
              <li className="cursor-pointer my-8 flex justify-center items-center">
              {t("contact")}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

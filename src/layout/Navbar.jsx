import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "../data/navbarData";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const path =
      location.pathname === "/" ? "home" : location.pathname.substring(1);
    setActive(path);
  }, [location.pathname]);

  const handleLinkActive = (link) => {
    setActive(link);
    navigate(link === "home" ? "/" : `/${link}`);
    setIsOpen(false);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["home", "about", "services", "works", "contact"];
  // const navItems = ["home", "about", "services", "works", "blogs", "contact"];
  const lineWidths = {
    home: "50px",
    about: "60px",
    services: "80px",
    works: "60px",
    blogs: "55px",
    contact: "75px",
  };

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <>
      <div className="block lg:hidden w-full shadow-lg fixed bg-white z-40">
        <IconButton onClick={toggleNavbar}>
          <MenuIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed bg-[#141313] md:w-[280px] z-50 md:max-w-[280px] w-full h-full min-h-screen px-8 lg:py-10 py-6 transition-transform duration-300 ease-in-out`}
      >
        <div className={`fixed top-5 lg:hidden right-5 z-50`}>
          <IconButton onClick={toggleNavbar} className="text-white">
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </div>

        <h1
          className="text-[#FFFFFF] font-bold text-2xl font-plexSerif cursor-pointer"
          onClick={() => {
            navigate("/");
            toggleNavbar();
          }}
        >
          Krishu.
        </h1>
        <ul className="text-[#FFFFFF] flex flex-col gap-3 py-8 text-[16px] leading-[30px] font-plexSans">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleLinkActive(item)}
              className={`relative cursor-pointer z-10 ${
                active === item ? "font-bold" : ""
              }`}
            >
              {item.toUpperCase()}
              {active === item && (
                <img
                  className="absolute -z-10 left-0 top-[13px] h-1"
                  src="../assets/Line.png"
                  alt="Active Indicator"
                  style={{ width: lineWidths[item] }}
                />
              )}
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          {navbarData.map((item, index) => {
            return (
              <motion.a
                href={item.link}
                target="_blank"
                key={index}
                className="bg-white rounded-full w-max p-3 text-center cursor-pointer hover:bg-gradient-to-tr from-[#B86ADF] via-[#FF6C63] to-[#FFB147]"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.2 }}
              >
                {item.icon}
              </motion.a>
            );
          })}
        </div>
        <p className="font-plexSans text-base py-6 text-[#FFFFFF]">
          Copyright ©{getCurrentYear()} Krishna Dholiya. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Navbar;

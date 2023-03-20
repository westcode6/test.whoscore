import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import PageCalendar from "./Calender";
// import { GiHockey } from "react-icons/gi";
// import { TbCricket, TbBallTennis } from "react-icons/tb";
// import {
//   MdOutlineSportsVolleyball,
//   MdOutlineSportsBasketball,
//   MdOutlineSportsRugby,
// } from "react-icons/md";

import { GiHockey } from "react-icons/gi";
import { TbCricket, TbBallTennis } from "react-icons/tb";
import {
  MdOutlineSportsVolleyball,
  MdOutlineSportsBasketball,
  MdOutlineSportsRugby,
} from "react-icons/md";

import { RiFootballLine } from "react-icons/ri";
export default function Categories() {
  const location = useLocation();

  return (
    <div className="pt-10 md:hidden">
      <section className="w-full">
        <div className="w-full overflow-x-scroll rounded-2xl px-6 py-4 md:py-4 mt-2 flex gap-2 sm:gap-0 md:gap-4 items-center">
          <NavItem
            title="Football"
            to="/home"
            icon={<RiFootballLine />}
            active={location.pathname === "/home"}
          />

          <NavItem
            title="Basketball"
            to="/basketball"
            icon={<MdOutlineSportsBasketball />}
            active={location.pathname === "/basketball"}
          />

          <NavItem
            title="Vollyball"
            to="/home"
            icon={<MdOutlineSportsVolleyball />}
            active={location.pathname === "/volleyball"}
          />

          <NavItem
            title="Rugby"
            to="/home"
            icon={<MdOutlineSportsRugby />}
            active={location.pathname === "/rugby"}
          />
          <NavItem
            title="Tennis"
            to="/home"
            icon={<TbBallTennis />}
            active={location.pathname === "/tennis"}
          />
          <NavItem
            title="Cricket"
            to="/home"
            icon={<TbCricket />}
            active={location.pathname === "/cricket"}
          />
          <NavItem
            title="Hockey"
            to="/home"
            icon={<GiHockey />}
            active={location.pathname === "/hockey"}
          />
        </div>

        <div className="w-full relative mt-2 md:mt-0">
          <PageCalendar />
        </div>
      </section>
    </div>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <NavLink to={to} className={`flex-1  ${active && ""}`}>
      <div
        to={to}
        className={`w-full flex px-4 tracking-normal items-center space-x-2 justify-center  transform transition duration-100 ease-in hover:scale-105 ${
          active
            ? "bg-dark shadow-inner p-2 rounded-3xl text-lime-500"
            : " shadow-inner rounded-3xl p-2 "
        }`}
      >
        <span
          className={`block text-2xl ${
            active ? "text-lime-500" : "text-gray-800"
          }`}
        >
          {icon}
        </span>
        <span
          style={{ fontWeight: "900", fontSize: "14px" }}
          className={`block !font-semibold ${active && "text-amber-700"}`}
        >
          <div
            className={`${
              active
                ? "text-sm font-extrabold text-white"
                : "text-sm text-gray-900 font-extrabold tracking-wide"
            }`}
          >
            {title}
          </div>
        </span>

        <div className="hidden">
          {active && (
            <span className="w-3 block md:hidden border-2 bg-black border-black"></span>
          )}
        </div>
      </div>
    </NavLink>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.string,
  active: PropTypes.bool,
};

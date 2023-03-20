import { TiVideo } from "react-icons/ti";
import {  HiOutlineNewspaper } from "react-icons/hi";
import { RiHome5Line } from "react-icons/ri";
import {TbClipboardList} from "react-icons/tb"
import {MdExplore} from "react-icons/md"
import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";
// import { IconContext } from "react-icons/lib";

export default function BottomBar() {
  const location = useLocation();

  return (
    <div className="w-full fixed footer-image footer-glass bottom-0 left-0 right-0 max-w-3xl footer-bg shadow-2xl z-20 ">
      <footer className="footer-glass  py-6  ring-offset-0 ring-black shadow-inner shadow-gray-200 border-none  text-white sm:hidden">
        <div className="flex  items-center justify-evenly">
          <NavItem
            title="Home"
            to="/home"
            icon={<RiHome5Line />}
            active={location.pathname === "/home"}
          />

<NavItem
            title="News"
            to="/newsPage"
            icon={<HiOutlineNewspaper className="rounded-xl" />}
            active={location.pathname === "/newsPage"}
          />

          <NavItem
            title="Watch"
            to="/watchPage"
            icon={<TiVideo  />}
            active={location.pathname === "/watchPage"}
          />

          <NavItem
            title="Ticket ID"
            to="/ticketIdPage"
            icon={<TbClipboardList />}
            active={location.pathname === "/ticketIdPage"}
          />
        

          <NavItem
            title="Profile"
            to="/profile"
            icon={<MdExplore />}
            active={location.pathname === "/explore"}
          />
        </div>
      </footer>
    </div>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <Link
      to={to}
      className={`flex justify-center space-x-1 item-center px-2 py-3  ${
        active
          ? "bg-dark rounded-full py-2 text-white px-4"
          : "bg-white text-white flex items-center"
      }`}
    >
      <span
        className={`${
          active ? "text-lime-400  text-2xl block" : "text-zinc-400 text-3xl"
        } `}
      >
        {icon}
      </span>

      <span  className={`tracking-wide   ${active ? "block text-base font-bold" : "hidden"}`}> {title}</span>
    </Link>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  active: PropTypes.bool,
};

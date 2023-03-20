import { FaLongArrowAltLeft } from "react-icons/fa";
import { AiFillCloseCircle, AiOutlineSearch } from "react-icons/ai";
import BottomBar from "../components/BottomBar";
import React from "react";
import { Link } from "react-router-dom";
export default function SearchPage() {
  return (
    <>
      <section className="px-6 py-4 w-full h-screen bg-black">
        <div className="flex items-center justify-between mt-4">

        <Link to={"/home"}>
        <a href="##">
            <span className="text-xl text-white">
              <FaLongArrowAltLeft />
            </span>
          </a>
          </Link>


          <Link to={"/home"}>
          <a href="##">
            <span className="text-xl text-white">
              <AiFillCloseCircle />
            </span>
          </a>
          </Link>
        </div>

        <div className="mt-8 relative">
          <input
            type="text"
            className="w-full border-2 h-12 rounded pl-10 text-sm border-neutral-600"
            placeholder="Search for teams, competitions or country"
          />

          <span className="absolute top-4 left-4 ">
            <AiOutlineSearch />
          </span>
        </div>
      </section>

      <BottomBar />
    </>
  );
}

import { FaLongArrowAltLeft, FaRegUser } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineNewspaper } from "react-icons/hi";
import { MdOutlineNotifications } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import PageLayout from "../layout/layout";
export default function Profile() {
  return (
    <PageLayout>
      <div className="px-5 py-10 mt-12 mb-20 root-container h-full">
        <a href="/home">
          <FaLongArrowAltLeft />
        </a>

        <div className="w-full border-2 border-gray-900 rounded-md px-2 xsm:px-4 py-8 mt-10">
          <a
            href="##"
            className="flex items-center justify-between border-b border-neutral-200 transform transition hover:-translate-y-1 sm:selection:hover:shadow-xl p-2 rounded-md mb-10 font-semibold"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                {" "}
                <FaRegUser />
              </span>
              <span className="pl-2">My Profile</span>
            </div>

            <span>
              <IoIosArrowForward />
            </span>
          </a>

          <a
            href="##"
            className="flex items-center justify-between border-b border-neutral-200 transform transition  hover:-translate-y-1 sm:selection:hover:shadow-xl p-2 rounded-md mb-10 font-semibold"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                <BsFillStarFill />
              </span>
              <span className="pl-2">Favourites</span>
            </div>

            <span>
              <IoIosArrowForward />
            </span>
          </a>

          <a
            href="##"
            className="flex items-center justify-between border-b border-neutral-200 transform transition hover:-translate-y-1 sm:selection:hover:shadow-xl p-2 rounded-md mb-10 font-semibold"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                <HiOutlineNewspaper />
              </span>
              <span className="pl-2">My Bets</span>
            </div>

            <span>
              <IoIosArrowForward />
            </span>
          </a>

          <a
            href="##"
            className="flex items-center justify-between border-b border-neutral-200 transform transition hover:-translate-y-1 sm:selection:hover:shadow-xl p-2 rounded-md mb-10 font-semibold"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                <MdOutlineNotifications />
              </span>
              <span className="pl-2">Notifications</span>
            </div>

            <span>
              <IoIosArrowForward />
            </span>
          </a>

          <a
            href="##"
            className="flex items-center justify-between border-b border-neutral-200 transform transition hover:-translate-y-1 sm:selection:hover:shadow-xl p-2 rounded-md font-semibold"
          >
            <div className="flex items-center space-x-2">
              <span className="text-lg">
                <AiOutlineSetting />
              </span>
              <span className="pl-2">My Preferences</span>
            </div>

            <span>
              <IoIosArrowForward />
            </span>
          </a>
        </div>
      </div>
    </PageLayout>
  );
}

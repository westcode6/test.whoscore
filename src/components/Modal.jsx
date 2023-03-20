import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

export default function ModalDialog({ openModal, setOpenModal }) {
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <section
      className={`${
        !openModal && "hidden"
      } fixed top-0 bottom-0 right-0 left-0 w-full h-screen overflow-y-scroll bg-transparent`}
      style={{ zIndex: 999 }}
    >
      <div className="p-4 z-50 w-full absolute top-16 md:top-10">
        <div className="bg-white shadow-xl rounded-md max-w-lg mx-auto">
          <aside className="flex items-center justify-between p-4">
            <h1 className="text-xl text-neutral-800 font-mulish font-semibold">
              Enter your details
            </h1>
            <MdClose
              onClick={handleCloseModal}
              className="text-pink-500 text-2xl font-bold cursor-pointer"
            />
          </aside>

          <main className="p-4">
            <form action="">
              <label
                htmlFor="firstname"
                className="font-semibold text-neutral-700 mb-1 block"
              >
                Name *
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full h-11 rounded-sm pl-3 text-sm border mb-5"
              />

              <label
                htmlFor="firstname"
                className="font-semibold text-neutral-700 mb-1 block"
              >
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full h-11 rounded-sm pl-3 text-sm border mb-5"
              />

              <label
                htmlFor="firstname"
                className="font-semibold text-neutral-700 mb-1 block"
              >
                Email Address *
              </label>
              <input
                type="text"
                placeholder="Email address"
                className="w-full h-11 rounded-sm pl-3 text-sm border mb-5"
              />


              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 transform transition hover:-translate-y-1 text-white rounded-md shadow-md mt-5">
                Submit
              </button>
            </form>
          </main>
        </div>
      </div>

      <div
        onClick={handleCloseModal}
        className="bg-black opacity-80 fixed top-0 right-0 bottom-0 w-full h-screen"
      ></div>
    </section>
  );
}

ModalDialog.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};

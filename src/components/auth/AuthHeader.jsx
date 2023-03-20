import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className="bg-white py-5 sm:py-4 text-center">
      <Link to="/home" className="logo-font sm:text-xl">
        WhoScore?
      </Link>
    </header>
  );
};

export default AuthHeader;

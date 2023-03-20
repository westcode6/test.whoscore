import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function SplashScreen() {
  const [redirectHome, setRedirectHome] = useState(false);
  setTimeout(() => setRedirectHome(true), 5000);

  return (
    <>
      {redirectHome ? (
        <Navigate to="/home" />
      ) : (
        <section id="hideSplashScreen" className="block relative">
          <div className="w-full h-screen flex items-center justify-center">
            <h2 className="text-4xl text-black logo-font animate__animated animate__pulse animate__infinite animate__fast">
              WhoScore?
            </h2>
          </div>
        </section>
      )}
    </>
  );
}

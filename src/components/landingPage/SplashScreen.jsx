import { Navigate } from "react-router-dom";
import { useState } from "react";

export default function SplashScreen() {
  const [redirectHome, setRedirectHome] = useState(false);
  setTimeout(() => setRedirectHome(true), 5000);

  return (





     

         <div className="bg-white ">
         <div className="w-full">
     {redirectHome ? (
        <Navigate to="/home" />
      ) : (
        <section id="hideSplashScreen" className="splash_glass_blend w-full relative">
          <div className="w-full h-screen flex items-center justify-center">
           <div className="">
           <h2 className="text-4xl text-black  logo-font animate__animated animate__pulse animate__infinite animate__fast">
              WhoScore?
            </h2>
          

         
           </div>
          </div>
        </section>
      )}
     </div>
       
      </div>

  );
}

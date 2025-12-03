import Image from "next/image";
import React from "react";

import CertificateSlider from "./CertificateSlider";

function Certificate() {
  return (
 <section>
  <div className="py-10 bg-background-2">
    
    {/* <1200px full width, >=1200px centered max 1200px */}
    <div className="flex max-w-full   lg:max-w-[1280px] mx-auto px-4">
      
      <div className="max-w-3xl w-full text-center md:text-left">

        <h2 className="text-3xl    lg:w-full  md:w-[600px]   sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-4 font-poppins font-semibold">
          Earn dual PG Certificates from UT Austin and Great Lakes Executive Learning
        </h2>

        <p className="font-poppins font-normal  lg:w-full  md:w-[600px]  mb-4 text-black/80 text-sm sm:text-base md:text-lg">
          Strengthen your profile with credentials from a globally renowned U.S. university 
          and one of India’s top 10 business schools.
        </p>

        <div className="py-10 w-full flex justify-center md:justify-start">
          <div className="w-full md:max-w-[568px]  xl:max-w-[768px] xl:mx-auto">
            <CertificateSlider
              images={[
                "/certificate.jpg",
                "/certificate.jpg",
                "/certificate.jpg",
              ]}
            />
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

  );
}

export default Certificate;

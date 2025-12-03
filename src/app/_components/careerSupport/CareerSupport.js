import React from "react";
import CareerCards from "./CareerCards";

function CareerSupport() {
  return (
 <section>
  <div className="py-10">
    <div className="flex max-w-7xl m-auto px-4 "> 
      <div className="max-w-3xl w-full text-center md:text-left">

        <span className="text-sec-heading font-poppins font-medium text-[12px] leading-4 tracking-[2.4px] mb-2 inline-block">
          GET ACCESS TO CURATED JOBS WITH
        </span>

        <h2 className="text-3xl  lg:w-full  md:w-[600px]    sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-6 font-poppins font-semibold">
          Dedicated Career Support
        </h2>

        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          <CareerCards
            text={"Exclusive access to Great Learning job board"}
            image={"/job-postings.jpg"}
          />
          <CareerCards
            text={"Personalised Resume & LinkedIn Review"}
            image={"/resume.jpg"}
          />
          <CareerCards
            text={"Live career mentorship with industry experts"}
            image={"/mentorship.jpg"}
          />
          <CareerCards
            text={"Exclusive recruitment drives"}
            image={"/recruitment-drives.jpg"}
          />
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default CareerSupport;

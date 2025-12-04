import React from "react";
import Image from "next/image";
import Button from "@/app/ui/button/Button";
import CompreLine from "./CompreLine";
function Hero() {
  return (
    <main>
      <div className="py-10">
        <div className="bg-background-1 m-auto max-w-7xl flex flex-col lg:flex-row gap-6 items-center lg:items-start">
          {/* LEFT CONTENT */}
          <div className="w-full pl-4 pt-10">
            <div className="text-center lg:text-left">
              <span className="text-black/60 inline-block text-sm font-medium mb-2.5 bg-[#e8f0fc] py-1.5 px-2 font-poppins">
            Transform Your Career With Inttrvu&apos;s Data Science Certification Course
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 font-poppins font-semibold">
               Data Science and AI Course
              </h1>

              <p className="text-[#444] mb-5 font-poppins">
                Become a Data Scientist or Business Analyst. No coding knowledge
                required.
              </p>

              <p className="text-[#444] mb-5 font-poppins font-medium tracking-[0.15px] leading-tight">
                12 Months · Online Certificate · Rated 4.8/5 by 14K+
                Learners
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button text={"DOWNLOAD BROCHURE"} reff="#" clas={"rounded-lg font-poppins font-medium tracking-[1.25px] leading-6  py-4 px-10 hover:bg-[#0f4cd1]"} />
              </div>
            </div>
                 <div className="mt-6 text-left">
        <p className="text-sm text-black/80 font-medium font-poppins">
          Application closes on
        </p>
        <p className="mt-1 text-[#C1272D] font-semibold font-poppins">
          5th Dec 2025
        </p>
      </div>
          </div>

          {/* RIGHT IMAGE — hidden on small screens */}
          <div className="hidden lg:block relative w-full h-[450px]">
            <Image
              src="/ds_lp_banner_img.jpg"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
              {/* DEADLINE SECTION */}
 
        </div>
      </div>

      <CompreLine />
    </main>
  );
}

export default Hero;

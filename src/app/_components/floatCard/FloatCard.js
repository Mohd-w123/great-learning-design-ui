import Button from "@/app/ui/button/Button";
import Image from "next/image";
import React from "react";

function FloatCard() {
  return (
   <div className="h-full w-full absolute top-0 p-4 hidden min-[1120px]:block">
  <div className="max-w-sm w-full bg-white shadow-xl rounded-2xl p-5 sticky top-5 lg:left-[67%]">

    {/* IMAGE */}
    <div className="w-full h-[200px] rounded-lg overflow-hidden">
      <Image
        src="/banner-card.jpg"
        alt="Program"
        width={500}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>

    {/* TITLE */}
    <h2 className="mt-5 text-xl font-semibold font-poppins text-center text-black/90 leading-snug">
      PG Program in Data Science <br /> with Generative AI
    </h2>

    {/* SUBTITLE */}
    <p className="mt-2 text-center text-black/60 font-medium font-poppins">
      12 Months • Online • Dual Certificate
    </p>

    {/* BUTTON: Brochure */}
    <Button
      reff={"#"}
      clas={
        "mt-6 w-full bg-[#1560F3] hover:bg-[#0f4cd1] text-white font-semibold py-3 rounded-lg font-poppins"
      }
      text={"DOWNLOAD BROCHURE"}
    />

    {/* BUTTON: Curriculum */}
    <Button
      reff={"#"}
      clas={
        "mt-3 w-full border border-[#1560F3] font-semibold py-3 rounded-lg font-poppins hover:bg-blue-50"
      }
      bg={"bg-white"}
      clr={"text-[#1560F3]"}
      text={"DOWNLOAD CURRICULUM"}
    />

    {/* DEADLINE SECTION */}
    <div className="mt-6 text-left">
      <p className="text-sm text-black/80 font-medium font-poppins">
        Application closes on
      </p>
      <p className="mt-1 text-[#C1272D] font-semibold font-poppins">
        5th Dec 2025
      </p>
    </div>
  </div>
</div>

  );
}

export default FloatCard;

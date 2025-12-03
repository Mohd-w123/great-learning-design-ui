import Button from "@/app/ui/button/Button";
import Image from "next/image";
import React from "react";

function Curriculum() {
  return (
<section>
  <div className="py-10 bg-background-2">
    <div className="flex max-w-7xl m-auto px-4">
      <div className="max-w-3xl w-full text-center md:text-left">

        <span className="text-sec-heading font-poppins font-medium text-[12px] leading-4 tracking-[2.4px] mb-2 inline-block uppercase">
          Comprehensive curriculum to help
        </span>

        <h2 className="text-3xl lg:w-full  md:w-[600px]  sm:text-4xl md:text-5xl leading-tight md:leading-16 mb-4 font-poppins font-semibold">
          Master industry-valued skills
        </h2>

        <p className="font-poppins lg:w-full  md:w-[600px]   font-normal mb-4 text-black/80 text-sm sm:text-base md:text-lg">
          Strengthen your profile with Learn Data Science & Generatice AI
          with a syllabus designed by the faculty at UT Austin McCombs
          School of Business and Great Lakes
        </p>

        {/* ICON GRID */}
        <div className="flex flex-wrap gap-5 mb-4 justify-center md:justify-start">

          {/* Every skill card becomes full width on mobile */}
          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/py-ico.png"} alt="python" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              Python Libraries
            </p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/tableau-ico.png"} alt="tableau" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">Tableau</p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/mysql-ico.png"} alt="mysql" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">SQL</p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/nlp_gen_ai.png"} alt="nlp_gen_ai" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              NLP with Generative AI
            </p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/b_a.png"} alt="Business Analytics" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              Business Analytics
            </p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/m_l.png"} alt="Machine Learning" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              Machine Learning
            </p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/p_m.png"} alt="Predictive Modelling" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              Predictive Modelling
            </p>
          </div>

          <div className="flex gap-2.5 items-center w-full sm:w-[48%]">
            <Image src={"/network-ico.png"} alt="Neural Networks & Computer Vision" width={72} height={72} />
            <p className="text-xl sm:text-2xl font-poppins font-medium">
              Neural Networks & Computer Vision
            </p>
          </div>

        </div>

        {/* STATS BOXES */}
        <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center md:justify-start">

          <div className="p-2 flex gap-4 justify-center items-center bg-white rounded-lg w-full sm:w-auto">
            <div className="py-2 px-4 bg-[#ffbc4c] rounded-4xl text-[20px] font-poppins">
              22+
            </div>
            <p className="text-[18px] sm:text-[20px] font-semibold font-poppins">Tools</p>
          </div>

          <div className="p-2 flex gap-4 justify-center items-center bg-white rounded-lg w-full sm:w-auto">
            <div className="py-2 px-4 bg-[#ffbc4c] rounded-4xl text-[20px] font-poppins">
              60+
            </div>
            <p className="text-[18px] sm:text-[20px] font-semibold font-poppins">Case Studies</p>
          </div>

          <div className="p-2 flex gap-4 justify-center items-center bg-white rounded-lg w-full sm:w-auto">
            <div className="py-2 px-4 bg-[#ffbc4c] rounded-4xl text-[20px] font-poppins">
              10+
            </div>
            <p className="text-[18px] sm:text-[20px] font-semibold font-poppins">Projects</p>
          </div>

        </div>

        <div className="flex justify-center md:justify-start">
          <Button text={"DOWNLOAD CURRICULUM"} reff={"#"} clas={"rounded-lg font-poppins font-medium tracking-[1.25px] leading-6  py-4 px-10 hover:bg-[#0f4cd1]"} />
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

export default Curriculum;

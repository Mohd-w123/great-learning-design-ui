import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <section>
      <div className="py-10 bg-background-2">
        <div className="flex max-w-7xl m-auto px-4 md:px-0">
          <div className="max-w-3xl w-full text-center md:text-left">
            <div className="py-14">
              <div className="max-w-6xl mx-auto px-4">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins mb-10">
                  Delivered in Collaboration with:
                </h2>

                {/* Logo and text */}
                <div className="flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* LOGO */}
                  <div className="w-[180px] sm:w-[220px] md:w-[260px] mb-4  shrink-0">
                    <Image
                      src="/greatlearning-brand.svg" // <-- change this URL only
                      alt="Great Learning"
                      width={260}
                      height={120}
                      className="w-full h-auto object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-black/70 text-[16px] leading-7 font-poppins max-w-3xl">
                    The McCombs School of Business at The University of Texas at
                    Austin is collaborating with Great Learning to deliver the
                    PG Program in Data Science with Generative AI. Great
                    Learning is an ed-tech company that has empowered learners
                    from over{" "}
                    <span className="font-semibold">170+ countries</span>
                    to achieve positive career growth outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import React from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="flex items-start justify-center px-6 pt-10 font-inter">
        <div className="flex items-center gap-10 mx-auto">
          {/* Text Block */}
          <div className="flex flex-col space-y-4 text-left">
            <h1 className="font-semibold text-[7rem] leading-[6.5rem]">Blog</h1>
            <p className="text-xl leading-snug text-[#333]">
              Thoughts from Condrx on our journey, <br />
              experiments, and lessons in <br />
              AI, cyber, and fintech.
            </p>
          </div>

          {/* Logo Image */}
          <div>
            <Image 
              alt="Ship logo"
              src="/condrx_labs_logo.png"
              height={275}
              width={275}
            />
          </div>
        </div>
      </div>

      {/* Blog Entry Box */}
      <div className="flex justify-center mt-20 font-inter">
        <div
          className="bg-[#D9D9D9] rounded-2xl shadow-xl p-6 flex flex-col justify-between w-[75vw] h-[37vw]"
        //   style={{ width: "824px", height: "460px" }} // Slightly increased height
        >
          {/* Top Section: Buttons + Metadata aligned in a row */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4">
              {/* Buttons */}
              <button className="text-base font-medium flex items-center gap-2 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-6 py-2.5 rounded-md hover:shadow-md transition-all duration-300 shadow">
                Vision <FaChevronRight className="text-sm" />
              </button>
              <button className="text-base font-medium flex items-center gap-2 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-6 py-2.5 rounded-md hover:shadow-md transition-all duration-300 shadow">
                Feature <FaChevronRight className="text-sm" />
              </button>

              {/* Metadata Text - aligned horizontally with buttons */}
              <div className="flex flex-col text-sm text-[#1e1e1e] font-medium ml-6">
                <p>September 12, 2025</p>
              </div>
              <div className="flex flex-col text-sm text-[#1e1e1e] font-medium ml-6">
                <p>8 min read</p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Read Full Case button */}
          <div>
            <button className="font-medium flex items-center gap-3 bg-gradient-to-r from-[#373941] to-[#232428] text-white px-8 py-4 text-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
              Read full case <FaChevronRight className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

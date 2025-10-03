import React from "react";
import Navbar from "@/app/components/navbar";
import Image from "next/image";

const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-start justify-center px-6 pt-2 font-inter">
                <div className="flex items-center gap-10 mx-auto">
                    {/* Text Block */}
                    <div className="flex flex-col space-y-4 text-left">
                        <h1 className="font-semibold text-[7rem]">Blog</h1>
                        <p className="text-xl leading-snug">
                            Thoughts from Condrx on our journey, <br />
                            experiments, and lessons in <br />
                            AI, cyber, and fintech.
                        </p>
                    </div>

                    {/* Image Block */}
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
            <div className="flex justify-center font-inter">
                <div className="bg-[#D9D9D9] min-w-full min-h-full">
                    <div className="">
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;

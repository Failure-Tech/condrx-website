// 'use client';

// import React, { useState } from 'react';
// // import { useSession } from 'next-auth/react';
// import Image from 'next/image';
// // import logo from '@/app/icon.png';

// // Stripe Plans >> fill in your own priceId & link
// export const plans = [
//     {
//         // link: process.env.NODE_ENV === 'development' ? '********' : '',
//         link: "https://buy.stripe.com/test_dRm00ibaZg12dH6clt6Zy05",
//         // priceId: process.env.NODE_ENV === 'development' ? '********' : '',
//         priceId: "price_1SE0MbApZvh4ZKKlqZtmKAUs",
//         price: 20,
//         duration: '/onetime'
//     },
//     {
//         // link: process.env.NODE_ENV === 'development' ? '********' : '',
//         // priceId: process.env.NODE_ENV === 'development' ? '********' : '',
//         link: "https://buy.stripe.com/test_5kQeVc5QF3egcD2gBJ6Zy06",
//         priceId: "price_1SE0PDApZvh4ZKKlBC67Sce6",
//         price: 50,
//         duration: '/onetime'
//     }
// ];

// const Pricing = () => {
//     // const { data: session } = useSession();
//     const [plan, setPlan] = useState(plans[0]);

//     return (
//         <>
//             <section id="pricing">
//                 <div className="py-24 px-8 max-w-5xl mx-auto">
//                     <div className="flex flex-col text-center w-full mb-20">
//                         <p className="font-medium text-primary mb-5">Pricing</p>
//                         <h2 className="font-semibold text-3xl lg:text-5xl tracking-tight">
//                             Condrx
//                         </h2>
//                     </div>

//                     <div className="relative flex justify-center flex-col lg:flex-row items-center lg:items-stretch gap-8">
//                         <div className=" w-full max-w-lg">
//                             <div className="relative flex flex-col h-full gap-5 lg:gap-8 z-10 bg-base-100 p-8 rounded-xl">
//                                 <div className="flex items-center gap-8">
//                                     <div
//                                         className="flex items-center gap-2"
//                                         onClick={() => setPlan(plans[0])}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="monthly"
//                                             className="radio"
//                                             checked={plan.price === 19}
//                                         />
//                                         <span>Pay monthly</span>
//                                     </div>
//                                     <div
//                                         className="flex items-center gap-2"
//                                         onClick={() => setPlan(plans[1])}
//                                     >
//                                         <input
//                                             type="radio"
//                                             name="yearly"
//                                             className="radio"
//                                             checked={plan.price === 99}
//                                         />
//                                         <span>Pay yearly (60% OFF 💰)</span>
//                                     </div>
//                                 </div>

//                                 <div className="flex gap-2">
//                                     <p
//                                         className={`text-5xl tracking-tight font-extrabold`}
//                                     >
//                                         ${plan.price}
//                                     </p>
//                                     <div className="flex flex-col justify-end mb-[4px]">
//                                         <p className="text-sm tracking-wide text-base-content/80 uppercase font-semibold">
//                                             {plan.duration}
//                                         </p>
//                                     </div>
//                                 </div>

//                                 <ul className="space-y-2.5 leading-relaxed text-base flex-1">
//                                     {[
//                                         {
//                                             name: 'NextJS boilerplate'
//                                         },
//                                         { name: 'User oauth' },
//                                         { name: 'Database' },
//                                         { name: 'Emails' },
//                                         { name: '1 year of updates' },
//                                         { name: '24/7 support' }
//                                     ].map((feature, i) => (
//                                         <li
//                                             key={i}
//                                             className="flex items-center gap-2"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 viewBox="0 0 20 20"
//                                                 fill="currentColor"
//                                                 className="w-[18px] h-[18px] opacity-80 shrink-0"
//                                             >
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
//                                                     clipRule="evenodd"
//                                                 />
//                                             </svg>

//                                             <span>{feature.name} </span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                                 <div className="space-y-2">
//                                     <a
//                                         className="btn btn-primary btn-block "
//                                         target="_blank"
//                                         href={
//                                             plan.link
//                                             // '?prefilled_email=' +
//                                             // session?.user?.email
//                                         }
//                                     >
//                                         Subscribe
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="fixed right-8 bottom-8">
//                 <a
//                     href="https://shipfa.st?ref=stripe_pricing_viodeo"
//                     className="bg-white font-medium inline-block text-sm border border-base-content/20 hover:border-base-content/40 hover:text-base-content/90 hover:scale-105 duration-200 cursor-pointer rounded text-base-content/80 px-2 py-1"
//                 >
//                     <div className="flex gap-1 items-center">
//                         <span>Built with</span>
//                         <span className="font-semibold text-base-content flex gap-0.5 items-center tracking-tight">
//                             <Image
//                                 // src={logo}
//                                 alt="ShipFast logo"
//                                 priority={true}
//                                 className="w-5 h-5"
//                                 width={20}
//                                 height={20}
//                             />
//                             ShipFast
//                         </span>
//                     </div>
//                 </a>
//             </section>
//         </>
//     );
// };

// export default Pricing;

"use client";

import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

import React from "react";
import Image from "next/image";
import { Link } from "react-router-dom";

import { IoCheckmark } from "react-icons/io5";

const Pricing = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-y-6 mb-15 mt-20">
        <h1 className="text-6xl font-semibold flex items-center justify-center text-center gap-2">
          Get started 
          <Image
            src="/condrx_labs_logo.png"
            width={71}
            height={80}
            alt="CondRx Labs Logo"
          />
          <span className="text-6xl font-semibold text-[#C45816]">
            for free.
          </span>
        </h1>
        <p className="text-xl text-center font-normal">
          Whether you’re building for fun or for scale, Kairo keeps every line
          of <br /> code secure by default.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="font-inter flex flex-col md:flex-row items-start justify-center gap-10 mt-10 mb-20 font-inter px-6 md:px-20">
        {/* Starter Card */}
        <div className="border-2 border-[#E37633] rounded-3xl p-6 flex flex-col w-full md:w-1/3">
          <h1 className="text-lg">Starter</h1>
          <h2 className="text-4xl font-medium mt-2">Free</h2>
          <button onClick={() => (<Link to="https://tally.so/r/wa7EEZ" target="_blank" rel="noopener noreferrer" />)} className="hover:cursor-pointer mt-4 text-lg bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-xl">
            Join the waitlist
          </button>
          <p className="mt-4">Every core feature included.</p>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <div className="flex flex-col gap-y-3 mt-4">
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>AI-powered security guardrails</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Feedback on common vulnerabilities</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Access to base LLM for code rewrite</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Local-only environment for full data</p>
            </div>
          </div>
        </div>

        {/* Pro Card */}
        <div className="border-2 font-inter border-[#E37633] rounded-3xl p-6 flex flex-col w-full h-full md:w-1/3">
          <h1 className="text-lg">Pro</h1>
          <h2 className="text-4xl font-medium mt-2 flex items-end gap-1">
            $9 <span className="text-base font-normal text-xl">/ lifetime</span>
          </h2>
          <button className="mt-4 bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded">
            Subscribe
          </button>
          <p className="mt-4">Every core feature included.</p>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <h3 className="mt-4 font-medium">Everything in the starter, and...</h3>
          <div className="flex flex-col gap-y-3 mt-4">
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Real-time secure rewrite across multiple files</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Access to improved Kairo LLM</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Encrypted cloud sync for multi-device development</p>
            </div>
          </div>
        </div>

        {/* Advanced Card */}
        <div className="font-inter border-2 border-[#E37633] rounded-3xl p-6 flex flex-col w-full md:w-1/3">
          <h1 className="text-lg">Advanced</h1>
          <h2 className="text-4xl font-medium mt-2 flex items-end gap-1">
            $20 <span className="text-base text-xl font-normal">/ lifetime</span>
          </h2>
          <button className="mt-4 bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-2 px-4 rounded">
            Level up
          </button>
          <p className="mt-4">Every core feature included.</p>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <h3 className="mt-4 font-medium">
            Everything in the pro, and even more...
          </h3>
          <div className="flex flex-col gap-y-3 mt-4">
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>
                Full compliance toolkit and early access to SOC-2 automation
                tools
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Project-level analytics and AI-generated security reports</p>
            </div>
            <div className="flex items-center gap-2">
              <IoCheckmark />
              <p>Priority access to new Kairo models and beta features</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;

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

import { IoCheckmark } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";

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
          Whether you&apos;re building for fun or for scale, Kairo keeps every line
          of <br /> code secure by default.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="font-inter flex flex-col md:flex-row items-stretch justify-center gap-8 mt-10 mb-20 px-6 md:px-20">
        {/* Starter Card */}
        <div className="border-2 border-[#E37633] rounded-3xl p-6 flex flex-col justify-between w-full md:w-[400px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Starter</h1>
            <h2 className="text-4xl font-medium mt-2">Free</h2>
            <a
              href="https://tally.so/r/wa7EEZ"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-4 text-lg bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-xl"
            >
              Join the waitlist
            </a>
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
          <div className="mt-auto mb-2"></div>
        </div>

        {/* Pro Card */}
        <div className="border-2 border-[#E37633] rounded-3xl p-6 flex flex-col justify-between w-full md:w-[280px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Pro</h1>
            <h2 className="text-4xl font-medium mt-2 flex items-end gap-1">
              $9 <span className="font-normal text-xl">/ lifetime</span>
            </h2>
            <a className="block text-center text-lg mt-4 bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-3xl">
              Subscribe
            </a>
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
          <div className="mt-auto mb-2"></div>
        </div>

        {/* Advanced Card */}
        <div className="border-2 border-[#E37633] rounded-3xl p-6 flex flex-col justify-between w-full md:w-[280px] lg:w-[450px] h-full min-h-[600px] bg-white shadow-sm">
          <div>
            <h1 className="text-lg">Advanced</h1>
            <h2 className="text-4xl font-medium mt-2 flex items-end gap-1">
              $20 <span className="text-xl font-normal">/ lifetime</span>
            </h2>
            <a className="block text-center mt-4 text-lg bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-2 px-4 rounded-3xl">
              Level up
            </a>
            <p className="mt-4">Every core feature included.</p>
            <div className="border-b border-[#D9D9D9] mt-4"></div>
            <h3 className="mt-4 font-medium">
              Everything in the pro, and even more...
            </h3>
            <div className="flex flex-col gap-y-3 mt-4">
              <div className="flex items-center gap-2">
                <IoCheckmark />
                <p>
                  Full compliance toolkit and early access to SOC-2 automation tools
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
          <div className="mt-auto mb-2"></div>
        </div>
      </div>

      {/* <div>
        <div>
          <h1>Starter</h1>
          <p>Free</p>
          <a
            href="https://tally.so/r/wa7EEZ"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 text-lg bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-xl"
          >
            Join the waitlist
          </a>
        </div>
        <div>
          <h1>Pro</h1>
          <p>$9 / lifetime</p>
          <a className="block text-center text-lg mt-4 bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-3xl">
            Subscribe
          </a>
        </div>
        <div>
          <h1>Advanced</h1>
          <p>$20 / lifetime</p>
          <a className="block text-center mt-4 text-lg bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-2 px-4 rounded-3xl">
            Level up
          </a>
        </div>
        <div>
          <h1>Build Better</h1>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <div>
            <h1>Real-time Guardrails</h1>
            <IoCheckmark />
            <IoCheckmark />
            <IoCheckmark />
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <div>
            <h1>AI Rewrite Engine</h1>
            <IoCheckmark />
            <IoCheckmark />
            <p><IoCheckmark />Enhanced</p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <div>
            <h1>Execution Sandbox</h1>
            <HiOutlineXMark />
            <p><IoCheckmark /> Local</p>
            <p><IoCheckmark /> Cloud-based</p>
          </div>
          <div className="border-b border-[#D9D9D9] mt-4"></div>
          <div>
            <h1>Performance Metrics</h1>
            <HiOutlineXMark />
            <IoCheckmark />
            <p><IoCheckmark />Advanced</p>
          </div>
        </div>
      </div> */}

      <div className="w-full flex flex-col font-inter px-6 md:px-20 mt-10 mb-20">
        {/* Header Row: Plans */}
        <div className="flex justify-between items-start w-full mb-8">
          <div className="flex-1"></div>
          <div className="flex justify-between text-left w-3/4">
            {/* Starter */}
            <div className="flex flex-col items-start text-left w-[180px]">
              <h1 className="text-xl font-medium">Starter</h1>
              <p className="text-lg text-gray-700">Free</p>
              <a
                href="https://tally.so/r/wa7EEZ"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 text-lg bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-3xl w-full text-center"
              >
                Join the waitlist
              </a>
            </div>

            {/* Pro */}
            <div className="flex flex-col items-start text-left w-[180px]">
              <h1 className="text-xl font-medium">Pro</h1>
              <p className="text-lg text-gray-700">$9 / lifetime</p>
              <a
                href="#"
                className="block mt-3 text-lg bg-gradient-to-r from-[#D9D9D9] to-[#000000] text-white py-2 px-4 rounded-3xl w-full text-center"
              >
                Subscribe
              </a>
            </div>

            {/* Advanced */}
            <div className="flex flex-col items-start text-left w-[180px]">
              <h1 className="text-xl font-medium">Advanced</h1>
              <p className="text-lg text-gray-700">$20 / lifetime</p>
              <a
                href="#"
                className="block mt-3 text-lg bg-gradient-to-r from-[#C45816] to-[#E37633] text-white py-2 px-4 rounded-3xl w-full text-center"
              >
                Level up
              </a>
            </div>
          </div>
        </div>

        {/* Section 1: Build Better */}
        <div className="flex flex-col w-full gap-8">
          <h1 className="text-2xl font-medium text-left font-inter">Build Better</h1>

          <div className="flex justify-between items-start w-full">
            <div className="flex-1 text-left">
              <h2 className="text-lg font-semibold">Real-time Guardrails</h2>
            </div>
            <div className="flex justify-between w-3/4">
              <IoCheckmark className="text-black text-xl" />
              <IoCheckmark className="text-black text-xl" />
              <IoCheckmark className="text-black text-xl" />
            </div>
          </div>

          <div className="border-b border-[#D9D9D9] w-full"></div>

          <div className="flex justify-between items-start w-full">
            <div className="flex-1 text-left">
              <h2 className="text-lg font-semibold">AI Rewrite Engine</h2>
            </div>
            <div className="flex justify-between w-3/4">
              <IoCheckmark className="text-black text-xl" />
              <IoCheckmark className="text-black text-xl" />
              <p className="flex items-center gap-1 text-black text-xl">
                <IoCheckmark className="text-black text-xl" /> Enhanced
              </p>
            </div>
          </div>

          <div className="border-b border-[#D9D9D9] w-full"></div>

          <div className="flex justify-between items-start w-full">
            <div className="flex-1 text-left">
              <h2 className="text-lg font-semibold">Execution Sandbox</h2>
            </div>
            <div className="flex justify-between w-3/4">
              <HiOutlineXMark className="text-black text-xl" />
              <p className="flex items-center gap-1 text-black text-xl">
                <IoCheckmark className="text-black text-xl" /> Local
              </p>
              <p className="flex items-center gap-1 text-black text-xl">
                <IoCheckmark className="text-black text-xl" /> Cloud-based
              </p>
            </div>
          </div>

          <div className="border-b border-[#D9D9D9] w-full"></div>

          <div className="flex justify-between items-start w-full">
            <div className="flex-1 text-left">
              <h2 className="text-lg font-semibold">Performance Metrics</h2>
            </div>
            <div className="flex justify-between w-3/4">
              <HiOutlineXMark className="text-black text-xl" />
              <IoCheckmark className="text-black text-xl" />
              <p className="flex items-center gap-1 text-black text-xl">
                <IoCheckmark className="text-black text-xl" /> Advanced
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Your Coding Flow */}
        <div className="flex flex-col w-full gap-8 mt-20">
        <h1 className="text-2xl font-medium text-left font-inter">Your Coding Flow</h1>

        {[ 
            ["Kairo Access", ["Core", "Kairo+", "Kairo-X"]],
            ["Prompt Customization", ["X", "Basic", "Persistent Memory"]],
            ["Daily Usage Limit", ["25/day", "100/day", "Unlimited"]],
            ["Project History", ["X", "X", "Checkmark"]],
            ["API Key Access", ["X", "Checkmark", "Extended"]],
        ].map(([title, items], idx) => (
            <React.Fragment key={idx}>
            <div className="flex justify-between items-start w-full">
                <div className="flex-1 text-left">
                <h2 className="text-lg font-semibold">{title}</h2>
                </div>
                <div className="flex justify-between w-3/4">
                {items.map((item, i) =>
                    item === "X" ? (
                    <HiOutlineXMark key={i} className="text-black text-xl" />
                    ) : item === "Checkmark" ? (
                    <IoCheckmark key={i} className="text-black text-xl" />
                    ) : (
                    <p key={i} className="flex items-center gap-1 text-black text-xl">
                        {item.includes("Checkmark") && <IoCheckmark className="text-black text-xl" />}
                        {item.replace("Checkmark ", "")}
                    </p>
                    )
                )}
                </div>
            </div>
            {/* Divider */}
            <div className="border-b border-[#D9D9D9] w-full"></div>
            </React.Fragment>
        ))}
        </div>

        {/* Section 3: Community and Growth */}
        <div className="flex flex-col w-full gap-8 mt-20">
        <h1 className="text-2xl font-medium text-left font-inter">Community and Growth</h1>

        {[
            ["Community Hub", ["Checkmark", "Priority", "Multi-device Access"]],
            ["Response Priority", ["X", "X", "Fast-Track"]],
            ["Early Features", ["X", "Checkmark", "Early Beta Access"]],
            ["Onboarding", ["Self-Serve", "Guided", "Custom Setup"]],
        ].map(([title, items], idx) => (
            <React.Fragment key={idx}>
            <div className="flex justify-between items-start w-full">
                <div className="flex-1 text-left">
                <h2 className="text-lg font-semibold">{title}</h2>
                </div>
                <div className="flex justify-between w-3/4">
                {items.map((item, i) =>
                    item === "X" ? (
                    <HiOutlineXMark key={i} className="text-black text-xl" />
                    ) : item === "Checkmark" ? (
                    <IoCheckmark key={i} className="text-black text-xl" />
                    ) : (
                    <p key={i} className="flex items-center gap-1 text-black text-xl">
                        <IoCheckmark className="text-black text-xl" /> {item}
                    </p>
                    )
                )}
                </div>
            </div>
            {/* Divider */}
            <div className="border-b border-[#D9D9D9] w-full"></div>
            </React.Fragment>
        ))}
        </div>

        <div className="relative flex items-center justify-center bg-transparent mt-10 mb-20 mx-auto w-3/4 h-[500px] rounded-3xl">
          {/* Background Image */}
          <Image
            src="/pricing_hs.png" // replace with your background image path
            alt="Coming Soon Background"
            fill
            className="object-cover rounded-3xl"
          />

          {/* Overlay for darkening if needed */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 space-y-4">
            <h1 className="text-2xl md:text-3xl font-medium">Coming soon</h1>
            <h1 className="text-5xl md:text-6xl font-semibold">
              Free for students. Six months on us.
            </h1>
            <p className="text-lg md:text-xl font-normal max-w-2xl">
              We&apos;re building Condrx in high school — and we&apos;re keeping it that way. <br />
              Every verified high school student gets full access to Kairo Pro for 6 <br />
              months, completely free.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
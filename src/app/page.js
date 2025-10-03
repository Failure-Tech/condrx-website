"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Home = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4">
        {/* Left: Logo and Typography */}
        <div className="flex items-center space-x-2">
          <Image 
            src="/condrx_labs_logo.png"
            alt="condrx logo"
            width={60}
            height={60}
          />
          <Image 
            src="/condrx_labs_logo_typography.png"
            alt="condrx logo typography"
            width={120}
            height={40}
          />
        </div>

        {/* Center: Nav Links */}
        <ul className="flex space-x-8">
          <li className="font-inter cursor-pointer hover:text-[#E37633] transition duration-300">Product</li>
          <li className="font-inter cursor-pointer hover:text-[#E37633] transition duration-300">Vision</li>
          <li className="font-inter cursor-pointer hover:text-[#E37633] transition duration-300">Pricing</li>
          <li className="font-inter cursor-pointer hover:text-[#E37633] transition duration-300">Blog</li>
        </ul>

        {/* Right: CTA Button */}
        <button className="font-inter text-white bg-[#1E1E1E] rounded-full px-6 py-2">
          Get Started
        </button>
      </nav>

      {/* HERO Section */}
      <div className="relative flex flex-col items-center text-center px-4">
        {/* Background SVG */}
        <Image 
          alt="Navy Hero Image"
          src="/8.svg"
          width={900}
          height={900}
          className="-mt-28 mb-0"
        />

        {/* Hero Content */}
        <div className="-mt-24 z-10 flex flex-col items-center space-y-4 relative">
          <h1 className="font-inter font-semibold text-[#181818] text-5xl leading-tight">
            We create the tools that power <br /> tomorrow&apos;s builders
          </h1>

          {/* Paragraph + Positioned Arrow */}
          <div className="relative flex items-center justify-center">
            {/* Arrow Left of Paragraph */}
            {/* <Image 
              alt="Arrow Icon"
              src="/11.svg"
              width={400}
              height={400}
              className="absolute -left-32 top-6 rotate-180"
            /> */}

            <p className="font-inter text-2xl text-[#333333] max-w-2xl relative z-10 px-4">
              Condrx is a Gen-Z engineering team building AI, cyber, and finance
              products that give small teams the power of big companies.
            </p>
          </div>

          {/* Buttons + Positioned Lock/Key & Money */}
          <div className="relative flex items-center justify-center space-x-10 mt-2 text-xl z-10">
            {/* Lock/Key SVG (left, rotated, next to button) */}
            {/* <Image 
              alt="Key Icon"
              src="/10.svg"
              width={400}
              height={400}
              className="absolute left-4 -top-8 -rotate-45"
            /> */}

            {/* Buttons */}
            <button className="font-inter flex items-center gap-2 bg-[#C45816] text-white px-5 py-2 rounded-md hover:opacity-90 transition z-10">
              Join the waitlist <FaChevronRight />
            </button>
            <button className="font-inter flex items-center gap-2 bg-[#373941] text-white px-5 py-2 rounded-md hover:opacity-90 transition z-10">
              See our work <FaChevronRight />
            </button>

            {/* Money SVG (right side, above black button) */}
            {/* <Image 
              alt="Money Icon"
              src="/9.svg"
              width={400}
              height={400}
              className="absolute -right-10 -top-14 -rotate-45"
            /> */}
          </div>
        </div>
      </div>

      <div className="mt-12 px-6">
        <div className="max-w-4xl mx-auto text-left space-y-2">
          <h1 className="font-inter text-[#C45816] text-xl">
            Introducing our first product
          </h1>
          <h1 className="font-inter font-semibold text-3xl text-[#181818] leading-snug">
            Meet Kairo. The AI layer that makes every line <br /> of code secure by default.
          </h1>

          <Image 
            alt="Placeholder"
            src="/window.svg"
            width={973}
            height={535}
          />
        </div>
      </div>

      <div className="mt-16 px-6">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-x-16 gap-y-6 max-w-6xl mx-auto">
          {/* Real-time Guardrails */}
          <div className="flex flex-col items-center text-center font-inter space-y-3 max-w-sm">
            <h1 className="text-3xl font-semibold text-[#181818]">Real-time Guardrails</h1>
            <p className="text-base text-[#333333]">
              Flags insecure code as it&apos;s generated, keeping <br /> developers safe without leaving their editor.
            </p>
            <Image 
              alt="Guardrails Image"
              src="/real_time_guardrails.png"
              width={461}
              height={260}
            />
          </div>

          {/* Instant Secure Rewrite */}
          <div className="flex flex-col items-center text-center font-inter space-y-3 max-w-sm">
            <h1 className="font-inter text-3xl font-semibold text-[#181818]">Instant Secure Rewrite</h1>
            <p className="font-inter text-base text-[#333333]">
              Generates a secure alternative instantly, reducing <br /> the time spent fixing vulnerabilities later.
            </p>
            <Image 
              alt="Instant Secure Rewrite Image"
              src="/instant_rewrite.png"
              width={461}
              height={260}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start text-left font-inter space-y-4 px-6 mt-16 max-w-4xl mx-auto">
        <h1 className="text-lg text-[#C45816] font-inter font-medium">
          It&apos;s time to code safe
        </h1>
        
        <h1 className="text-5xl font-inter font-semibold text-[#181818] leading-snug">
          Debugging. Shipping apps. <br />
          Writing APIs. Building fintech. <br />
          Every line of code.
        </h1>

        <button className="flex font-inter items-center gap-2 bg-[#C45816] text-white px-5 py-2 rounded-md hover:opacity-90 transition z-10">
          Join the waitlist <FaChevronRight />
        </button>
      </div>

<div className="px-6 py-16 flex flex-col items-center text-center font-inter">
  <h1 className="text-5xl font-semibold text-[#181818] mb-12">
    Smarter coding starts with safety
  </h1>

  <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10 max-w-6xl">
    <div className="bg-[#F2F1F1] p-6 rounded-xl shadow-md w-full sm:w-[300px] flex flex-col items-center text-center font-inter transition-all duration-300">
      <Image alt="Write and run code" src="/window.svg" width={251} height={251} />
      <p className="mt-4 text-[#181818] text-base leading-snug">
        <span className="font-medium">Write and run code, instantly</span>{" "}
        <button
          onClick={() => setExpanded1(!expanded1)}
          className="inline-flex items-center text-[#C45816] ml-2"
        >
          <FaChevronRight className={`transition-transform duration-300 ${expanded1 ? "rotate-90" : ""}`} />
        </button>
        {expanded1 && (
          <span className="block mt-2 text-[#333333] font-normal">
            An in-browser Python environment with AI and security built in — no setup required.
          </span>
        )}
      </p>
    </div>

    <div className="bg-[#F2F1F1] p-6 rounded-xl shadow-md w-full sm:w-[300px] flex flex-col items-center text-center font-inter transition-all duration-300">
      <Image alt="Copy-paste" src="/window.svg" width={251} height={251} />
      <p className="mt-4 text-[#181818] text-base leading-snug">
        <span className="font-medium">Copy-paste without guessing</span>{" "}
        <button
          onClick={() => setExpanded2(!expanded2)}
          className="inline-flex items-center text-[#C45816] ml-2"
        >
          <FaChevronRight className={`transition-transform duration-300 ${expanded2 ? "rotate-90" : ""}`} />
        </button>
        {expanded2 && (
          <span className="block mt-2 text-[#333333] font-normal">
            A library of pre-audited code snippets for APIs, auth, and data handling, safe by default.
          </span>
        )}
      </p>
    </div>

    <div className="bg-[#F2F1F1] p-6 rounded-xl shadow-md w-full sm:w-[300px] flex flex-col items-center text-center font-inter transition-all duration-300">
      <Image alt="Support" src="/window.svg" width={251} height={251} />
      <p className="mt-4 text-[#181818] text-base leading-snug">
        <span className="font-medium">Support you can trust</span>{" "}
        <button
          onClick={() => setExpanded3(!expanded3)}
          className="inline-flex items-center text-[#C45816] ml-2"
        >
          <FaChevronRight className={`transition-transform duration-300 ${expanded3 ? "rotate-90" : ""}`} />
        </button>
        {expanded3 && (
          <span className="block mt-2 text-[#333333] font-normal">
            A custom model tuned for security and finance, delivering safer code than competing LLMs.
          </span>
        )}
      </p>
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center px-6 py-16 font-inter text-3xl gap-10">
  {/* Left-most column (2 images) */}
  <div className="flex flex-col gap-4">
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person1.jpg"
      className="rounded-md"
    />
  </div>

  {/* Next column (3 images) */}
  <div className="flex flex-col gap-4">
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person2.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person3.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person4.jpg"
      className="rounded-md"
    />
  </div>

  {/* Centered text + button */}
  <div className="flex flex-col font-semibold font-inter items-center text-center space-y-6 px-6">
    <h1 className="leading-snug">
      Leveling the playing field <br /> for students, startups, and <br /> small teams.
    </h1>
    <button className="flex items-center gap-2 bg-[#C45816] text-white px-5 py-2 rounded-md hover:opacity-90 transition text-base">
      See our vision <FaChevronRight />
    </button>
  </div>

  {/* Next column (3 images) */}
  <div className="flex flex-col gap-4">
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person5.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person6.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person7.jpg"
      className="rounded-md"
    />
  </div>

  {/* Right-most column (2 images) */}
  <div className="flex flex-col gap-4">
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person8.jpg"
      className="rounded-md"
    />
    <Image 
      alt="Person"
      width={76}
      height={112}
      src="/person9.jpg"
      className="rounded-md"
    />
  </div>
</div>
    <div className="flex flex-col items-center justify-center space-y-2 py-12 font-inter">
  {/* First row of images */}
  <div className="flex flex-row items-center justify-center gap-[1px]">
    <Image 
      alt="affiliation"
      src="/pear_ai.png"
      width={400}
      height={400}
    />
    <Image 
      alt="affiliation"
      src="/fr8.png"
      width={400}
      height={400}
    />
    <Image 
      alt="affiliation"
      src="/pear_ai.png"
      width={400}
      height={400}
    />
  </div>

  {/* Second row of images */}
  <div className="flex flex-row items-center justify-center gap-[1px]">
    <Image 
      alt="affiliation"
      src="/harvard_uni.png"
      width={400}
      height={400}
    />
    <Image 
      alt="affiliation"
      src="/carnegie_mellon.png"
      width={400}
      height={400}
    />
  </div>
</div>


    </>
  );
};

export default Home;

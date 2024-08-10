"use client";
import React from 'react';
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
        
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello, I'm {" "}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            "Wardatul Khoiroh",
                            1000,
                            "",
                            1000,
                            "ITB's Student",
                            1000,
                            "Warda",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#FFF8DB] text-base sm:text-lg mb-6 lg:text-xl">
                    Halo semuanya, perkenalkan aku Wardatul Khoiroh biasa dipangggil Warda!!
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                    </button> 
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 text-white mt-3">
                        <span className="block rounded-full px-5 py-2">Download CV</span>
                    </button> 
                </div>
            </motion.div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/hero-image.png"
                        alt="Hero Image"
                        className="absolute inset-0 m-auto"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;

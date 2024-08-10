import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="text-white py-8 px-4 md:py-16 md:px-16">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 items-center">
        <div className="flex justify-center">
          <Image 
            src="/images/about-image.png" 
            alt="About Me" // Tambahkan alt text untuk aksesibilitas
            width={500} 
            height={500} 
            className="object-cover" // Class untuk memastikan gambar tampil dengan benar
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I'm a ...
          </p>
          <div className="flex flex-row mt-8 space-x-4">
            <span className="font-semibold hover:text-white text-[#ADB7BE] border-b border-purple-500">
              Skills
            </span>
            <span className="hover:text-white text-[#ADB7BE] border-b border-transparent hover:border-purple-500">
              Education
            </span>
            <span className="hover:text-white text-[#ADB7BE] border-b border-transparent hover:border-purple-500">
              Experience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Haskell</li>
        <li>Python</li>
        <li>Canva</li>
        <li>Microsoft Office</li>
        <li>Mathematics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SD Al Ikhlash Lumajang (6 tahun)</li>
        <li>MTs Negeri 1 Lumajang (2 tahun)</li>
        <li>MA Negeri 2 Kota Malang (3 tahun)</li>
        <li>STEI-K ITB 2023 (masih)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Bendahara Badan Pengurus Angkatan STEI-K ITB 2023</li>
        <li>Ketua Sub DIvisi LO Impact 4.0</li>
        <li>Staff DIvisi LO OGG FITB ITB 2023</li>
        <li>Finance Manaager Panitia Malam Keakraban STEI-K ITB 2023</li>
        <li>Staff DIvisi Publikasi dan Dokumentasi Parade Wisuda April ITB 2024</li>
        <li>Staff PSDM Parade Wisuda Oktober ITB 2023</li>
        <li>Staff Pengajar Aksi Angkatan STEI-K ITB 2023</li>
        <li>Staff DIvisi Lapangan STEI-K Cup 2023</li>
        <li>Staff DIvisi Logistik Gathering Offline STEI-K ITB 2023</li>
        <li>Staff DIvisi Acara Welcoming Party STEI-K ITB 2023</li>
        <li>Silver Medalist HKIMO 2022</li>
        <li>Peraih Medali Perunggu PHI 2020</li>
        <li>Bronze Medalist HKIMO 2020</li>

      </ul>
    ),
  },
  {
    title: "Contact",
    id: "contact",
    content: (
      <ul className="list-disc pl-2">
        <li>Email : wardatulkhoiroh11@gmail.com</li>
        <li>Instagram : wrdtlkhoir</li>
        <li>Line : wrdtlkhoir</li>
        <li>Github : wrdtlkhoir</li>
      </ul>
    ),
}
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Halo semuanya, perkenalkan aku Warda dari fakultas STEI-K dan sekarang ada di jurusan teknik informatika (135). 
            Aku berasal dari Lumajang, Jawa Timur (terpelosok hehe). Aku merupakan orang yang mudah berbaur dengan yang lain alias dapat beradaptasi dengan cepat. 
            Tapi, aku cenderung kalau sudah dekat akan menunjukkan emosi yang tidak stabil. Aku orangnya gampang/cepat dalam mempelajari hal baru, namun juga bila tidak diterapkan
            maka lebih cepat juga lupanya. Minat aku yaitu di bidang Software Engineering, karena seru aja mencoba hal baru. Selain itu, aku tertarik dengan data science.
            Karena, disana kita dituntut teliti dan cermat. Bakat aku sejak SD di permatematikaan. Pencapaian yang pernah dilakukan yaitu lomba internasional saat SD maupun SMP, berangkat sendirian 
            tanpa orang tua. Mungkin pencapaian ini di STEI-K merupakan hal biasa, namun menurutku suatu pencapaian yang baik yaitu IP 4 di semester 2. Semoga kedepannya bisa berkomitmen hingga lulus!!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("contact")}
              active={tab === "contact"}
            >
              {" "}
              Contact{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Tugas Besar Dasar Pemrograman",
    description: "Pembuatan mini games untuk melawan monster sesuai spesifikasi yang diberikan.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Tugas Besar Pengenalan Komputasi 1",
    description: "Pembuatan mini ATM yang dilakukan dengan tahap survei terlebih dahulu sebagai bahan acuan dan pengembangannya.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Tugas Besar Pengenalan Komputasi 2",
    description: "Melakukan analisis terhadap data yang dikumpulkan melalui internet. Analisis terdiri dari beberapa cabang baik gambar, grafik, maupun statistik.",
    image: "/images/projects/3.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Bendahara Badan Pengurus Angkatan STEI-K ITB 2023",
    description: "Melakukan pendataan keuangan baik pengeluaran dan pemasukan selama masa jabatan BPA.",
    image: "/images/projects/4.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Calon Mentor OSKM ITB 2024",
    description: "Salah satu panitia lapangan di OSKM ITB 2024 nantinya, bertugas mendampingi para maba dan membimbing selama keberjalanan OSKM. ",
    image: "/images/projects/5.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Trainer CDT 2024",
    description: "CDT merupakan rangakian ospek awal yang diadakan oleh Ditmawa. Trainer bertugas mendampingi selama keberjalanan acara, menjadi role model bagi setiap menteenya.",
    image: "/images/projects/6.png",
    tag: ["All"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
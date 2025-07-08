"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "RKS Techware",
    image: "/images/projectimg/rks.png",
    externalLink: "https://rkstechware.com",
  },
  {
    id: 2,
    title: "HamproTech",
    image: "/images/projectimg/hamprotech.png",
    externalLink: "https://hamprotech.com",
  },
  {
    id: 3,
    title: "Pakistan Travel Advisor",
    image: "/images/projectimg/pakistantraveladvisor.png",
    externalLink: "https://pakistantraveladvisor.com",
  },
  // {
  //   id: 4,
  //   title: "Project Delta",
  //   image: "/projects/p4.jpg",
  //   externalLink: "https://example.com/project-delta",
  // },
];

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-12 md:py-18 lg:py-22">
      <div className="container">
        <SectionTitle
          title="At Galactecho Professional Gurus Are At Your Service. 🤝"
          paragraph="With a diverse team of visionary thinkers, Geek Coders, seasoned marketers, and creative wizards, we pride ourselves on delivering tailored solutions that elevate your brand above the noise."
          center
          mb="80px"
        />

        {/* 
        <ModalVideo
          channel="youtube"
          autoplay={true}
          start={true}
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={() => setOpen(false)}
        />
        */}

        <section className="mt-20">
          <SectionTitle title="Some Glimpse Of Our Work" paragraph="" center mb="40px" />

          {/* ✅ Responsive Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative group overflow-hidden rounded-xl transition-transform duration-500 transform hover:scale-[1.05] shadow-md dark:bg-white/5 bg-white"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-[200px] object-cover"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                  {/* Internal Link */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                    title="View Project"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </Link>

                  {/* External Link */}
                  <Link
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-white/20 hover:bg-white/30 p-3 rounded-full transition"
                    title="Visit Live Site"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.828 10.172a4 4 0 015.656 0l.586.586a2 2 0 010 2.828l-7.071 7.071a2 2 0 01-2.828 0l-.586-.586a4 4 0 010-5.656l.707-.707"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7h6m0 0v6" />
                    </svg>
                  </Link>
                </div>

                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
      </div>
    </section>
  );
};

export default Video;

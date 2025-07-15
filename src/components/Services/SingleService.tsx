'use client';

import { useEffect, useState } from "react";
import { Service } from "@/types/service";

const SingleService = ({ service }: { service: Service }) => {
  const { icon, title, paragraph } = service;
  const [mounted, setMounted] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="group perspective cursor-non w-full h-56 md:h-60"
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          flipped ? "rotate-y-180" : ""
        } group-hover:rotate-y-180 md:group-hover:rotate-y-180`}
      >
        {/* Front */}
     <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-white/10 backface-hidden flex flex-col items-center justify-center text-center">
  <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
    {icon}
  </div>
  <h3 className="text-lg font-bold text-black dark:text-white">
    {title}
  </h3>
</div>

        {/* Back */}
        {/* Back */}
<div className="absolute inset-0 bg-[#1c2736] text-white rounded-xl p-6 shadow-md border border-white/10 rotate-y-180 backface-hidden flex flex-col items-center justify-center text-center">
  <h3 className="text-lg font-semibold mb-2">{title}</h3>
  <p className="text-sm leading-relaxed">{paragraph}</p>
</div>

      </div>
    </div>
  );
};

export default SingleService;
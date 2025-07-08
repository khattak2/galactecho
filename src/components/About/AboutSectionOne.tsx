'use client';
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Discovery & Planning',
    description:
      'We start by understanding your vision, goals, and requirements. Through detailed consultations, we align on the best approach to achieve your objectives.',
  },
  {
    title: 'Design & Development',
    description:
      'Once we have a plan, our team creates stunning designs and develops powerful, user-friendly solutions that bring your ideas to life.',
  },
  {
    title: 'Launch & Support',
    icon: '🚀',
    description:
      'After rigorous testing, we launch your project and ensure everything is running smoothly. We provide ongoing support for continued success.',
  },
];

export default function SimpleProcess() {
  const [mounted, setMounted] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null); // track flipped index

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-[#0B0F19] text-white h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 gap-8">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="/images/workflw.png"
            alt="Workflow Illustration"
            className="max-h-[100vh] w-auto object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 space-y-6 overflow-hidden max-h-[100vh] pr-2 ">
          {steps.map((step, i) => {
            const isFlipped = flipped === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group perspective cursor-none"
                onClick={() => setFlipped(flipped === i ? null : i)}
              >
                <div
                  className={`relative w-full h-40 transition-transform duration-500 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  } group-hover:rotate-y-180 md:group-hover:rotate-y-180`}
                >
                  {/* Front */}
                  <div className="absolute inset-0 bg-[#121827] rounded-2xl p-6 shadow-md border border-white/10 backface-hidden flex items-center justify-center">
                    <h3 className="text-lg font-semibold">
                      Step {i + 1}: {step.title}
                    </h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 bg-[#1c2736] rounded-2xl p-6 shadow-md border border-white/10 rotate-y-180 backface-hidden flex items-start justify-start">
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

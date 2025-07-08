'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import Particles from "../Common/Particles"; // Custom component (see code below)
// import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Animated Particles Background */}
        <Particles />

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center ">
                {/* Animated Typing Text */}
                
                <TypeAnimation
                
                  sequence={[
                    "Transforming Ideas into Digital Experiences",
                    1000,
                    "Transforming Ideas into Stunning Websites",
                    1000,
                    "Transforming Ideas into Powerful Apps",
                    1000,
                  ]}
                  wrapper="h1"
                  speed={30}
                  repeat={Infinity}
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight whitespace-nowrap "
                />

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl"
                >
                  At <span className="font-bold text-primary">Galactecho</span>, we bring your vision to life with custom web development, mobile apps, and stunning designs.
                </motion.p>

                {/* Glowing CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <Link
                    href="#contact"
                    className="relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  >
                    <span className="relative z-10">Get Started</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                  </Link>
                  <Link
                    href="#services"
                    className="relative overflow-hidden rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-semibold text-primary dark:text-white transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                  >
                    <span className="relative z-10">Our Services</span>
                  </Link>
                </motion.div>

                {/* Floating 3D Shapes (Using Spline) */}

                <div className="mt-20">

                  {/* <div className="relative w-full h-[500px]">
  <Spline scene="https://prod.spline.design/YOUR-PUBLIC-ID/scene.splinecode" />
  <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10" />
</div> */}

                  {/* <iframe 
                    src='https://my.spline.design/untitled-4e4b3a0d9a0f1a0f1a0f1a0f1a0f1a0f/' 
                    className="w-full h-64 mx-auto"
                    frameBorder="0"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Blobs (Animated) */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 opacity-20 dark:opacity-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 opacity-20 dark:opacity-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary rounded-full blur-3xl"></div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
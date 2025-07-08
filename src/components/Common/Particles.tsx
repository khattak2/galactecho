// src/components/common/Particles.tsx
'use client';
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
        particles: {
          color: { value: "#4A6CF7" }, // Match your theme
          move: {
            direction: "none",
            enable: true,
            random: true,
            speed: 1,
            straight: false,
          },
          number: { 
            density: { enable: true, area: 800 }, 
            value: 80 
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { random: true, value: { min: 1, max: 3 } },
        },
      }}
    />
  );
};

export default ParticleBackground;
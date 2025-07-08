"use client";
import React, { useEffect, useRef, useState } from "react";

export default function DotCursor() {
  const [hover, setHover] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);


  useEffect(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    a, button, [role="button"], [data-cursor="pointer"] {
      cursor: none !important;
    }
  `;
  document.head.appendChild(style);
  return () => {
    document.head.removeChild(style);
  };
}, []);


  // Capture actual mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate cursor following with trailing effect
  useEffect(() => {
    const followMouse = () => {
      const easing = 0.12; // smaller = smoother trailing

      currentX.current += (mouseX.current - currentX.current) * easing;
      currentY.current += (mouseY.current - currentY.current) * easing;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentX.current - 8}px, ${currentY.current - 8}px)`;
      }

      requestAnimationFrame(followMouse);
    };
    followMouse();
  }, []);

  // Detect interactive element hover
  useEffect(() => {
    const selector = "a, button, [role=button], [data-cursor='pointer']";
    const enter = () => setHover(true);
    const leave = () => setHover(false);

    const bind = () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });
    };
    bind();
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
      obs.disconnect();
    };
  }, []);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  const base =
    "fixed z-[9999] pointer-events-none mix-blend-difference will-change-transform";
  const dot = "h-1.5 w-1.5 md:h-1.5 md:w-1.5 rounded-full";
  const ring = "h-5 w-5 rounded-full border border-white/40 bg-white/10 backdrop-blur";

  return (
    <div
      ref={cursorRef}
      className={`${base} ${hover ? ring : dot}`}
     style={{
  boxShadow: hover
    ? "none"
    : "0 0 8px 4px rgba(135, 206, 250, 0.4)",
  background: hover ? "transparent" : "skyblue",
  filter: "blur(1px)",
  top: "0px",
  left: "0px",
  position: "fixed",
}}


    />
  );
}

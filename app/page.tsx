"use client";
import Image from "next/image";

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/public/animations/developer.json";
import Typewriter from "@/components/typewritter";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <div className="hero w-full h-full text-white flex items-center flex-col justify-center gap-8">
      <div className="hero-mask "></div>{" "}
      {/* <div
        ref={container}
        style={{ width: "300px", height: "300px", zIndex: 2 }}
      /> */}
      <div style={{ zIndex: 2 }} className="text-primary font-semibold text-3xl">Welcome</div>
      <div style={{ zIndex: 2 }}>
        <Typewriter  texts={["Enes Malik Duman", "Frontend Developer"]} />
      </div>
    </div>
  );
}

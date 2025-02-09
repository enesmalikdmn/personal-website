"use client";

import Typewriter from "@/components/typewritter";

export default function Home() {

  return (
    <div className="hero w-full h-full text-white flex items-center flex-col justify-center gap-8">
      <div className="hero-mask "></div>{" "}
      <div style={{ zIndex: 2 }} className="text-primary font-semibold text-3xl">Welcome</div>
      <div style={{ zIndex: 2 }}>
        <Typewriter  texts={["Enes Malik Duman", "Frontend Developer"]} />
      </div>
    </div>
  );
}

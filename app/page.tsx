'use client'
import Image from 'next/image'

import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/public/animations/developer.json";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      const anim = lottie.loadAnimation({
        container: container.current, // Burada '!' kullanılıyor
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => anim.destroy();
    }
  }, []);

  return (
    <div className="flex w-full h-full justify-center">
      <div className='w-full h-full bg-white text-black flex items-center flex-col justify-center gap-12'>
      <div ref={container} style={{ width: "300px", height: "300px" }} />
        <h1 className='page-text-font text-[48px] uppercase font-bold text-center'>
          <span className='name-field'>Enes Malik</span>
          <span className='text-primary ml-2'>Duman</span>
        </h1>
        <div className='flex justify-center'>
          <p className='w-1/2 text-secondary page-text-font text-[18px] text-center'>
          I graduated from Ege University, Department of Electrical and Electronics Engineering. Disciplined temperament, eager to learn new skills, prone to leadership capacity, became a leader at Kuleli Military High School. I am currently a software engineer passionate about learning new technologies. I have carried out projects using technologies such as Vue.js, React, Typescript, Pinia, Redux Toolkit, Canvas.js, Vue-query both alone and with a team. I worked closely with designers to ensure proper implementation of UI components and visuals. I adhered to Agile methodologies including Scrum and Kanban. I have improved myself in subjects such as leadership and teamwork. I have been working as a Frontend Developer since 2021. I have been working as a Frontend team leader for three months.
          </p>
        </div>
        <div className='flex justify-center gap-4'>
            <a href="https://www.linkedin.com/in/enes-malik-duman-1077b0151/" target="_blank">
              <Image
                width={40}
                height={40}
                src="/linkedin-logo.webp"
                alt="linkedin"
              />
            </a>
            <a href="https://github.com/enesmalikdmn" target="_blank">
              <Image
                width={40}
                height={40}
                src="/github-logo.png"
                alt="github"
              />
            </a>
          </div>
      </div>
    </div>
  )
}

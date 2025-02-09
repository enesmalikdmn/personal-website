"use client";

import Image from "next/image";
import Header from "./header";

const Sidebar = () => {
  return (
    <div className="w-1/6 h-screen flex flex-col gap-36 justify-center items-center bg-black">
      {/* Dönüş Animasyonu için Container */}
      <div className="relative w-48 h-48 group [perspective:1000px]">
        {/* Kartın İç Yapısı */}
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Kartın Ön Yüzü */}
          <div className="absolute inset-0">
            <Image
              src="/work-pp.jpeg"
              alt="work-pp"
              width={256}
              height={256}
              className="rounded-full object-cover border-4 img-profile"
              priority
            />
          </div>

          {/* Kartın Arka Yüzü */}
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] bg-black rounded-full flex items-center justify-center">
            <Image
              src="/work-pp-back.png" // Arka tarafta gösterilecek farklı bir görsel
              alt="work-pp-back"
              width={256}
              height={256}
              className="rounded-full object-cover border-4 border-gray-600"
            />
          </div>
        </div>
      </div>
      <Header />
      <div className="flex justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/enes-malik-duman-1077b0151/"
          target="_blank"
        >
          <Image
            width={24}
            height={24}
            src="/linkedin-logo.webp"
            alt="linkedin"
          />
        </a>
        <a href="https://github.com/enesmalikdmn" target="_blank">
          <Image width={40} height={40} src="/github-logo.png" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

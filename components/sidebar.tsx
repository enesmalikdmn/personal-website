"use client";

import Image from "next/image";
import Header from "./header";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Sidebar = (props: { onRouteChange: (path: string) => void }) => {

  const handleRouteChange = (path: string) => {
    props.onRouteChange(path);
  };
    

  return (
    <div className="h-full w-full flex flex-col gap-36 justify-center items-center bg-black">
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
      <Header onRouteChange={handleRouteChange} />
      <div className="flex justify-center gap-4 text-primary">
        <a
          className="hover:text-[#0077B5]"
          href="https://www.linkedin.com/in/enes-malik-duman-1077b0151/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a className="hover:text-white" href="https://github.com/enesmalikdmn" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;

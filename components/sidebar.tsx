'use client';

import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen flex justify-center items-center bg-black">
      {/* Profil Resmi Container */}
      <div className="relative group">
        {/* Fotoğraf */}
        <Image
          src="/work-pp.jpeg"
          alt="work-pp"
          width={250}
          height={250}
          className="rounded-full object-cover border-4 img-profile group-hover:scale-110 transition-transform duration-500 ease-in-out"
          priority
        />

        {/* Hover Efektli Animasyonlu Çerçeve */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-transparent group-hover:border-primary animate-border-spin transition-all duration-500 ease-in-out"></div>
{/* 
        <div className="absolute bottom-0 transform translate-y-1/2 w-full bg-black/70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Frontend Developer
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;

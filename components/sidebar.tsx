'use client';

import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className="w-1/5 h-screen flex justify-center items-center bg-black">
      {/* Dönüş Animasyonu için Container */}
      <div className="relative w-64 h-64 group [perspective:1000px]">
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
    </div>
  );
};

export default Sidebar;

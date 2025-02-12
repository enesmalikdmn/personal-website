"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ name, description, image, link }) => {
  return (
    <div className="h-[24rem] w-[30rem] text-white border-2 border-[#f4f4f4] p-6 rounded-2xl max-w-3xl shadow-sm bg-white shadow-[#f4f4f4]">
      <div className="flex flex-col gap-4">
        <div onClick={() => window.open(link, "_blank")} className="relative cursor-pointer w-full md:h-[15rem] rounded-lg overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="w-full h-[1px] bg-black my-4"></div>
      <p className="text-black">{name}</p>
      <p className="text-black text-sm">{description}</p>
    </div>
  );
};

export default Card;

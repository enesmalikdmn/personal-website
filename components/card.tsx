"use client";
import React from "react";
import Image from "next/image";
import Chip from "@mui/material/Chip";

interface CardProps {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  description,
  image,
  link,
  technologies,
}) => {
  return (
    <div
      className={`w-[30rem] text-white border-2 border-[#f4f4f4] p-6 rounded-2xl max-w-3xl shadow-sm bg-white shadow-[#f4f4f4] ${
        link ? "h-[36rem]" : "h-[42rem]"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div
          onClick={() => window.open(link, "_blank")}
          className="relative flex justify-center cursor-pointer w-full md:h-[15rem] rounded-lg overflow-hidden"
        >
          {link ? (
            <Image src={image} alt={name} layout="fill" objectFit="cover" />
          ) : (
            <Image src={image} alt={name} width={240} height={240} />
          )}
        </div>
        <div className="flex-1"></div>
      </div>
      <div className="w-full h-[1px] bg-black my-4"></div>
      <div className="text-black">{name}</div>
      <p className="text-black text-sm">{description}</p>
      <div className="flex flex-col gap-2 mt-4">
        <div className="text-black ">Used Technologies:</div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Chip
              key={index}
              label={tech}
              sx={{ backgroundColor: "#BEBE28" }}
            ></Chip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

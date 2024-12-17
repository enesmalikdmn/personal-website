import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, description, image }) => {
  return (
    <div className="relative w-96 h-80 rounded-lg overflow-hidden group cursor-pointer">
      {/* Arkaplan Görsel */}
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="transform group-hover:scale-110 transition-transform duration-300 ease-in-out"
        priority
      />

      {/* Hover'da Gözükecek Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex items-center justify-center">
        <div className="text-center px-4">
          <h3 className="text-white text-lg font-bold">{name}</h3>
          <p className="text-gray-300 text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

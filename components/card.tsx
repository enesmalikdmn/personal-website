import React from 'react';
import Image from 'next/image';

interface CardProps {
  name: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ name, description, image }) => {
  return (
    <div className="border w-96 h-80 border-gray-300 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-200">
      <Image
        src={image}
        alt={name}
        width={375}
        height={225}
        className="rounded-md"
        priority
      />
      <h3 className="text-gray-600 mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </div>
  );
};

export default Card;

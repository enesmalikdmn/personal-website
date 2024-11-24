import React from 'react';
import Card from '@/components/card';

const projects = [
  {
    name: 'E-Commerce App',
    description: 'An online platform for seamless shopping.',
    image: '/images/ecommerce.png', // Public içindeki resim dosyasının yolu
  },
  {
    name: 'Moive App',
    description: 'A movie app with broadcast channel.',
    image: '/images/movieList.png', // Public içindeki resim dosyasının yolu
  },
];

function Projects() {
  return (
    <div className="flex flex-wrap gap-6 justify-center bg-white h-full">
      {projects.map((project, index) => (
        <Card
          key={index}
          name={project.name}
          image={project.image}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default Projects;

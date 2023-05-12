import Image from 'next/image';
import React from 'react';

interface IconGalleryProps {
  companies: { name: string; iconUrl: string }[];
}

function IconGallery({ companies }: IconGalleryProps) {
  return (
    <div className="max-w-5xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4">Companies That Rely on Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {companies.map((company) => (
          <div key={company.name} className="flex justify-center items-center">
            <Image src={company.iconUrl} alt={company.name} className="w-24 h-24" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconGallery;

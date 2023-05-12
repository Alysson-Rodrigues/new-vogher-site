import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
  children: ReactNode;
  imagePath: string;
  backgroundColor?: string;
  textColor?: string;
  childrenContainerClassName?: string;
  height?: string;
  mainContainerClassName?: string;
}

function Banner({ children, childrenContainerClassName, mainContainerClassName, height, imagePath, backgroundColor = 'gray', textColor = 'white' }: Props) {
  return (
    <div
    className={`relative w-full banner ${mainContainerClassName}`}
      style={{ backgroundColor, color: textColor, height: height ?? '50vh',
     }}
    >
      <Image
        src={imagePath}
        alt="Banner background"
        layout="fill"
        objectFit="cover"
      />
      <div className={`absolute top-0 left-0 w-full h-full flex ${childrenContainerClassName}`}>
          {children}
      </div>
    </div>
  );
};

export default Banner;

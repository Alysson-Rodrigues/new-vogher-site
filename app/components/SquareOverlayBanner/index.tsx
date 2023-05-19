import React, { ReactNode, useState } from 'react';
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

function SquaredOverlayBanner({
  children,
  childrenContainerClassName,
  mainContainerClassName,
  height,
  imagePath,
}: Props) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  return (
    <div
      className={`relative w-full banner ${mainContainerClassName}`}
      style={{
        height: height ?? '100%',
        backgroundImage: `url(${imagePath})`,
      }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"

      >
          <div
            className="absolute backdrop-blur-sm  rounded-full pointer-events-none z-0  bg-white bg-opacity-25 "
            style={{
              width: '1000px',
              height: '1000px',
              top: mousePosition.y - 500,
              left: mousePosition.x - 500,
            }}
          />
      </div>
      <div className={`absolute top-0 left-0 flex ${childrenContainerClassName}`}>
        {children}
      </div>
    </div>
  );
}

export default SquaredOverlayBanner;

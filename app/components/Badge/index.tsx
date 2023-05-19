import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';

interface ServiceBadgeProps {
    title: string;
    description: string;
    imageUrl: string;
    badgeBackground?: string;
    onMouseOver?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    onMouseOut?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    icons?: React.ReactNode;
    className?: string;
    preventDefault?: boolean;
    imageClassName?: string;
    textColor?: string;
}


function Badge({ title, description, imageUrl, badgeBackground, className, onMouseOver, onMouseOut, icons, preventDefault, imageClassName,textColor }: ServiceBadgeProps) {
    return (
        <div className={`badge bg-[${badgeBackground}] ${className} shadow-lg rounded-lg overflow-hidden`} onMouseOver={
            onMouseOver ? onMouseOver : (event) => {
                if (!preventDefault){
                event.currentTarget.style.transition = 'transform 0.5s ease';
                event.currentTarget.style.transform = 'scale(1.1)';
                }
            }
        }
        onMouseOut={
            onMouseOut ? onMouseOut : (event) => {
                if (!preventDefault){
                event.currentTarget.style.transition = 'transform 0.5s ease';
                event.currentTarget.style.transform = 'scale(1)';
                }
            }
        }
        >
            <div className={`h-40 bg-cover bg-center ${imageClassName}`} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="p-4">
                <h3 className={`font-bold text-xl text-[${textColor}] font-base-neue-bold mb-2`}>{title}</h3>
                <p className={`font-base-neue-regular mb-4 text-[${textColor}]`}>{description}</p>
                <div className="flex flex-wrap justify-left items-center gap-2">
                    {icons}
                </div>
            </div>
        </div>
    );
}

export default Badge;

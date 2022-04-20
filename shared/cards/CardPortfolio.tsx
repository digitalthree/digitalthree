import React from 'react';
import Image from 'next/image'

interface CardPortfolioProps {
    title: string
    image: string
    link: string
    animation?: string
    animationDelay?: number
}

export const CardPortfolio: React.FC<CardPortfolioProps> = ({title, image, animation, link, animationDelay}) => {
    return(
        <a
            className="w-full md:w-6/12 lg:w-4/12 px-6 text-center"
            data-aos={animation}
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-delay={animationDelay}
            href={link}
            target="_blank"
        >
            <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                id="cardPortfolio"
            >
                <div className="px-4 py-5 flex-auto">
                    <Image src={image} width={600} height={386} alt={title} className="mx-auto"/>
                    <h5 className="text-xl font-semibold">{title}</h5>
                </div>
            </div>
        </a>
    )

}
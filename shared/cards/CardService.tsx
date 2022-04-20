import React from 'react';
import Image from 'next/image'


interface CardServiceProps {
    title: string
    icon: string
    marginTop?: string
    animation?: string
    animationDelay?: number
}

export const CardService: React.FC<CardServiceProps> = ({title, icon, marginTop, animation, animationDelay}) => {
    return(
        <div
            className="w-full md:w-4/12 px-4 text-center"
            id="cardService"
            style={{marginTop: marginTop}}
            data-aos={animation}
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            data-aos-delay={animationDelay}
            onMouseOver={() => console.log('hover')}
        >
            <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg ho"

            >
                <div className="px-4 py-5 flex-auto">
                        <Image className="mx-auto" width={250} height={250} src={icon} alt={title}/>
                    <h5 className="text-xl font-semibold">{title}</h5>
                </div>
            </div>
        </div>
    )

}
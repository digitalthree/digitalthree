import React from 'react';
import Image from 'next/image'


interface CardBaseProps {
    name: string
    img: string
    listItems: string[]
    iconBackgroundColor?: string
    borderCard?: string
    marginTop?: string;
    cardWidthOnPercentage: number;
    animation?: string;
}

export const CardBase: React.FC<CardBaseProps> = (
    {name, img, listItems, iconBackgroundColor,borderCard, marginTop, cardWidthOnPercentage, animation}
) => {
    let md: string = 'md:w-4/12';
    switch (cardWidthOnPercentage) {
        case 16 :
            md = 'md:w-3/12'
            break;
        case 20 :
            md = 'md:w-3/12'
            break;
        case 25 :
            md = 'md:w-3/12'
            break;
        case 33 :
            md = 'md:w-4/12'
            break;
        case 50 :
            md = 'md:w-6/12'
            break;
        case 100 :
            md = 'md:w-full'
            break;
        default:
            md = 'md:w-full';
    }
    if(borderCard !== undefined){

    }
    return(
        <div
            className={`w-full ${md} px-4 text-center`}
            style={{marginTop: marginTop}}
            data-aos={animation}
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
        >
            <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
                style={{border: (borderCard !== undefined) ? `2px solid ${borderCard}`: '0px'}}
            >
                <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full"
                         style={{backgroundColor: iconBackgroundColor}}
                    >
                        <Image src={img} alt={name} width={200} height={200}/>
                    </div>
                    <h5 className="text-2xl font-semibold">{name}</h5>
                    <ul className="mt-2 mb-4 text-blueGray-500">
                        {listItems.map((listItem, index) => {
                            return(
                                <li key={index}>{listItem}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )

}
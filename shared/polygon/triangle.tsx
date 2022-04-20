import React from 'react';

interface ExampleProps {
    firstVertex: Point
    secondVertex: Point
    thirdVertex: Point
    tailwindTextColor: string
}

interface Point {
    x: number,
    y: number
}

export const Triangle: React.FC<ExampleProps> = ({firstVertex, secondVertex, thirdVertex, tailwindTextColor}) => {
    return (

        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className={`text-${tailwindTextColor} fill-current`}
                points={`${firstVertex.x.toString()} ${firstVertex.y.toString()} 
                                ${secondVertex.x.toString()} ${secondVertex.y.toString()}
                                ${thirdVertex.x.toString()} ${thirdVertex.y.toString()}`}
            />
        </svg>

    )

}
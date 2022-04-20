import React from 'react';
import {Triangle} from "../../../shared/polygon/triangle";

const Hero: React.FC = ({}) => {
    return (
        <div
            className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75"
            id="hero"
        >
            <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
                }}
            >
            <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
            />
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div
                            className="pr-0"
                            data-aos="zoom-in"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <h1 className="text-white font-semibold text-5xl">
                                Digital Three
                            </h1>
                            <p className="mt-4 text-lg text-blueGray-200">
                                Vuoi far decollare il tuo business?<br/>
                                Ma non sai da dove partire
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
                style={{transform: "translateZ(0)"}}
            >
                <Triangle
                    firstVertex={{x: 2560, y:0}}
                    secondVertex={{x: 2560, y:110}}
                    thirdVertex={{x: 0, y:100}}
                    tailwindTextColor="blueGray-200"
                />
            </div>

        </div>
    )

}

export default Hero
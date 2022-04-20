import React from 'react';
import {Triangle} from "../../../shared/polygon/triangle";
import Image from 'next/image'



const Team: React.FC = () => {
    return (
        <>
            <section className="relative py-20">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <Triangle
                        firstVertex={{x: 2560, y:0}}
                        secondVertex={{x: 2560, y:110}}
                        thirdVertex={{x: 0, y:100}}
                        tailwindTextColor="white"
                    />
                </div>

            </section>

            <section
                className="pt-20 pb-48"
                id="team"
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center text-center mb-24">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-5xl font-semibold">Team</h2>
                            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record maximum.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-6/12 lg:w-1/5 lg:mb-0 mb-12 px-4">
                            <div className="px-6 text-center">
                                <Image
                                    alt="..."
                                    src="/img/team-1-800x800.webp"
                                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    width={150}
                                    height={150}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Mirko</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Web Developer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-linkedin"/>
                                        </button>
                                        <button
                                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-1/5 lg:mb-0 mb-12 px-4">
                            <div className="px-6 text-center">
                                <Image
                                    alt="..."
                                    src="/img/team-2-800x800.webp"
                                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    width={150}
                                    height={150}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Luisa</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Marketing Specialist
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-linkedin"/>
                                        </button>
                                        <button
                                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-1/5 lg:mb-0 mb-12 px-4">
                            <div className="px-6 text-center">
                                <Image
                                    alt="..."
                                    src="/img/team-3-800x800.webp"
                                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    width={150}
                                    height={150}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Maurizio</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        UI/UX Designer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-linkedin"/>
                                        </button>
                                        <button
                                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-1/5 lg:mb-0 mb-12 px-4">
                            <div className="px-6 text-center">
                                <Image
                                    alt="..."
                                    src="/img/team-3-800x800.webp"
                                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    width={150}
                                    height={150}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Edgardo</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        Web Developer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-linkedin"/>
                                        </button>
                                        <button
                                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </button>
                                        <button
                                            className="bg-black text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-github"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-6/12 lg:w-1/5 lg:mb-0 mb-12 px-4">
                            <div className="px-6 text-center">
                                <Image
                                    alt="..."
                                    src="/img/team-3-800x800.webp"
                                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                                    width={150}
                                    height={150}
                                />
                                <div className="pt-6 text-center">
                                    <h5 className="text-xl font-bold">Luigi</h5>
                                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                                        UI/UX Designer
                                    </p>
                                    <div className="mt-6">
                                        <button
                                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-linkedin"/>
                                        </button>
                                        <button
                                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-facebook-f"/>
                                        </button>
                                        <button
                                            className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                        >
                                            <i className="fab fa-instagram"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Team
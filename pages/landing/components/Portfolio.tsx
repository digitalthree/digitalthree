import React, {useEffect, useState} from 'react';
import {CardBase} from "../../../shared/cards/CardBase";
import {CardService} from "../../../shared/cards/CardService";
import {Triangle} from "../../../shared/polygon/triangle";
import {CardPortfolio} from "../../../shared/cards/CardPortfolio";
import {PortfolioItem} from "../../../data/portfolioItems";

interface PortfolioProps {
}

const Portfolio: React.FC<PortfolioProps> = ({}) => {

    const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);

    const fetchPortfolioItems = async () => {
        const response = await fetch('api/portfolio');
        const data = await response.json()
        setPortfolioItems(data)
    }

    useEffect(() => {
        fetchPortfolioItems();
    }, []);


    return (
        <>
            <section className="relative">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <Triangle
                        firstVertex={{x: 2560, y:0}}
                        secondVertex={{x: 2560, y:110}}
                        thirdVertex={{x: 0, y:100}}
                        tailwindTextColor="blueGray-200"
                    />
                </div>

            </section>
            <section className="pb-20 bg-blueGray-200 -mt-24 pr-12">
                <div className="mx-auto">
                    <div
                        className="mx-auto text-center"
                        id="portfolio"
                    >
                        <h1 className="text-5xl mb-12 mt-24 font-semibold leading-normal">Portfolio</h1>
                        <div className="flex flex-wrap">
                            {(portfolioItems.length !== 0) ? portfolioItems.map(portfolioItem => {
                                return(
                                    <CardPortfolio
                                        key={portfolioItem.id}
                                        title={portfolioItem.name}
                                        image={portfolioItem.image}
                                        animation="zoom-in"
                                        animationDelay={portfolioItem.id*100}
                                        link={portfolioItem.link}
                                    />
                                )
                            }) : <div>Caricamento---Qui verrà inserito lo spinner di caricamento</div> }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Portfolio
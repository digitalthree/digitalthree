import React, {useEffect, useState} from 'react';
import {CardBase} from "../../../shared/cards/CardBase";
import {CardService} from "../../../shared/cards/CardService";
import {ServicesItem} from "../../../data/servicesItems";


const Services: React.FC = () => {

    const [services, setServices] = useState<ServicesItem[]>([]);

    const fetchServicesItems = async () => {
        let response = await fetch('/api/servizi')
        let data = await response.json()
        setServices(data)
    }

    useEffect(() => {
        fetchServicesItems()
    }, []);


    return(
        <section className="pb-20 bg-blueGray-200 -mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">

                    <CardBase
                        name="Marketing"
                        img="/img/logoDigitalThreeMarketing.webp"
                        listItems={["Brief e posizionamento del brand", "Creazione strategia social", "Creazione e sviluppo del piano editoriale"]}
                        iconBackgroundColor="#4695FE"
                        marginTop="30px"
                        cardWidthOnPercentage={33}
                        animation="zoom-in"
                    />


                    <CardBase
                        name="Web"
                        img="/img/logoDigitalThreeWeb.webp"
                        listItems={["Realizzazione e ottimizzazione sito web", "Creazione testi in ottica SEO", "Assistenza tecnica garantita"]}
                        iconBackgroundColor="#6846FC"
                        cardWidthOnPercentage={33}
                        animation="zoom-in"
                    />

                    <CardBase
                        name="Grafica"
                        img="/img/logoDigitalThreeGrafica.webp"
                        listItems={["Realizzazione e ottimizzazione sito web", "Creazione testi in ottica SEO", "Assistenza tecnica garantita"]}
                        iconBackgroundColor="#DFAC2A"
                        marginTop="30px"
                        cardWidthOnPercentage={33}
                        animation="zoom-in"
                    />


                </div>
                {/*Inizio sezione servizi*/}
                <div
                    className="container mx-auto text-center"
                    id="servizi"
                >
                    <h1 className="text-5xl mb-12 mt-24 font-semibold leading-normal">Servizi</h1>
                    <div className="flex flex-wrap">
                        {services.map(service => {
                            return(
                                <CardService
                                    key={service.id}
                                    title={service.name}
                                    icon={service.image}
                                    animation="fade-down"
                                    animationDelay={service.id*100}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Services
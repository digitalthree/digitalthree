import React, {useState} from 'react';
import {Triangle} from "../../../shared/polygon/triangle";
import SimpleSpinner from "../../../shared/spinners/simpleSpinner";
import ComplexAlert from "../../../shared/alerts/complexAlert";

const Preventivo: React.FC = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    return (
        <>
            <section className="pb-20 relative block bg-web-color">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                    style={{transform: "translateZ(0)"}}
                >
                    <Triangle
                        firstVertex={{x: 2560, y: 0}}
                        secondVertex={{x: 2560, y: 110}}
                        thirdVertex={{x: 0, y: 100}}
                        tailwindTextColor="web-color"
                    />
                </div>

                <div
                    className="container mx-auto px-4 lg:pt-24 lg:pb-64"
                    id="preventivo"
                >
                    <div className="flex flex-wrap text-center justify-center">
                        <div className="w-full lg:w-6/12 px-4">
                            <h2 className="text-4xl font-semibold text-white">
                                Richiedi un preventivo
                            </h2>
                            <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
                                Put the potentially record low maximum sea ice extent tihs
                                year down to low ice. According to the National Oceanic and
                                Atmospheric Administration, Ted, Scambos.
                            </p>
                        </div>
                    </div>
                    {/*<div className="flex flex-wrap mt-12 justify-center">
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div
                                className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-medal text-xl"/>
                            </div>
                            <h6 className="text-xl mt-5 font-semibold text-white">
                                Servizi Eccellenti
                            </h6>
                            <p className="mt-2 mb-4 text-white">
                                Some quick example text to build on the card title and make up
                                the bulk of the content.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div
                                className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-poll text-xl"/>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">
                                Fai crescere il tuo brand
                            </h5>
                            <p className="mt-2 mb-4 text-white">
                                Some quick example text to build on the card title and make up
                                the bulk of the content.
                            </p>
                        </div>
                        <div className="w-full lg:w-3/12 px-4 text-center">
                            <div
                                className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                                <i className="fas fa-lightbulb text-xl"/>
                            </div>
                            <h5 className="text-xl mt-5 font-semibold text-white">
                                Launch time
                            </h5>
                            <p className="mt-2 mb-4 text-white">
                                Some quick example text to build on the card title and make up
                                the bulk of the content.
                            </p>
                        </div>
                    </div>*/}
                </div>
            </section>
            <section className="relative block py-24 lg:pt-0 bg-web-color ">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                        <div className="w-full lg:w-6/12 px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <form
                                    id="formPreventivo"
                                    onSubmit={(event) => {
                                    event.preventDefault();
                                    setSubmitting(true)
                                    let data = {
                                        name: name,
                                        email: email,
                                        message: message
                                    }
                                    fetch('/api/preventivo', {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json, text/plain, *!/!*',
                                            'Content-Type': 'application/json'
                                        },
                                        body: JSON.stringify(data)
                                    }).then((res) => {
                                        console.log('Response received')
                                        setSubmitting(false)
                                        setSubmitted(true);
                                        (document.getElementById("formPreventivo") as HTMLFormElement).reset()
                                        setTimeout(() => {setSubmitted(false)}, 4000)
                                    })
                                }} className="flex-auto p-5 lg:p-10">
                                    <h4 className="text-2xl font-semibold">
                                        Contattaci
                                    </h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                        Compila il form e risponderemo alle tue esigenze
                                    </p>
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="full-name"
                                        >
                                            Nome e Cognome
                                        </label>
                                        <input
                                            type="text"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Full Name"
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setName(e.currentTarget.value)
                                            }}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setEmail(e.currentTarget.value)
                                            }}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Messaggio
                                        </label>
                                        <textarea
                                            rows={4}
                                            cols={80}
                                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                            placeholder="Type a message..."
                                            onChange={(e) => {
                                                e.preventDefault()
                                                setMessage(e.currentTarget.value)
                                            }}
                                        />
                                    </div>
                                    <div className="text-center mt-6">
                                        <button
                                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Invia
                                        </button>
                                        {(submitting) && <SimpleSpinner/> }
                                        {(submitted) && <ComplexAlert successTitle="Email Inviata" message="Email inviata correttamente" />}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Preventivo
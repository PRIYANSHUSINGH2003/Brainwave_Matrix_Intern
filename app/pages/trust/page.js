import React from "react";
import Navbar from "./Navbar";
import ShortFooter from "./ShortFooter";
import { FaHandsHelping, FaUserMd, FaHeartbeat } from 'react-icons/fa';

const Trust = () => {
    return (
        <>
            <Navbar />
            <section className="bg-blue-100 py-20 md:py-24">
                <div className="container mx-auto px-6 max-w-7xl text-center">
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-6 animate__animated animate__fadeIn">
                        Trust in Our Expertise
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 mb-12 animate__animated animate__fadeIn animate__delay-1s">
                        At Shivansh Physiotherapy Centre, we value the trust our patients place in us. Our experienced therapists
                        are dedicated to providing personalized treatments to restore your health and well-being. You can trust us
                        with your recovery journey.
                    </p>
                    <div className="flex justify-center gap-12 animate__animated animate__fadeIn animate__delay-2s">
                        <a
                            href="/contactus"
                            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-orange-700 focus:bg-orange-700 transform hover:scale-105 shadow-lg"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h3 className="text-3xl font-semibold text-gray-800 mb-8">
                        Why You Can Trust Us
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <FaHandsHelping className="text-blue-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-2xl font-semibold text-gray-700 mb-4">Proven Track Record</h4>
                            <p className="text-gray-600">
                                We have a history of successful treatments and satisfied patients who have trusted us with their recovery.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <FaUserMd className="text-green-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-2xl font-semibold text-gray-700 mb-4">Personalized Care</h4>
                            <p className="text-gray-600">
                                Each patient receives a customized treatment plan tailored to their individual needs and goals.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                            <FaHeartbeat className="text-red-600 text-4xl mb-4 mx-auto" />
                            <h4 className="text-2xl font-semibold text-gray-700 mb-4">Advanced Technology</h4>
                            <p className="text-gray-600">
                                We utilize state-of-the-art equipment and cutting-edge therapies to ensure optimal recovery.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ShortFooter />
        </>
    );
};

export default Trust;

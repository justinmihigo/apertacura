import Cards from "../components/Cards"
import Carousel from "../components/Carousel";
import { FunctionComponent } from "react";
import apertacura from "../assets/apertacura.png";
import bhc from "../assets/bhc1.jpeg";

const LandingPage: FunctionComponent = () => {
    return (
        <>
            <div>
                <Carousel />
            </div>
            <div className="pt-8">
                <Cards />
            </div>
            <div id="about" className="flex flex-col items-center py-4 w-full">
                <div>
                    <h1 className="text-3xl py-6 font-bold">About us</h1>
                </div>
                <div className="max-w-7xl py-4 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-50 top-0 overflow-hidden">
                                <img src={apertacura} alt="apertacura" className="object-cover h-full w-full hover:scale-105 ransition-transform duration-300" />
                            </div>
                            <div>
                                <p className="text-xl mt-4 font-bold">Apertacura</p>
                            </div>
                            <p className="py-4">
                                Why wait for a health problem when you can stay ahead of it? At ApertaCura, we believe wellness should be proactive, not reactive. Our dynamic digital platform blends smart technology with personalized insights, helping individuals and organizations take charge of their well-being before issues arise. With intuitive, data-driven tools, we make health management simple, empowering you to live better, longer, and stronger.
                            </p>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-50 top-0 overflow-hidden">
                                <img src={bhc} alt="apertacura" className="object-cover hover:scale-105 ransition-transform duration-300 h-full w-full" />
                            </div>
                            <div>
                                <p className="mt-4 text-xl font-bold">Biggest Health Challenge &trade;</p>
                            </div>
                            <p className="py-4">
                                The biggest health challenge today is maintaining consistency in leading a healthy lifestyle. Despite knowing the importance of regular exercise, balanced diets, and preventive care, many individuals struggle with staying motivated, finding the right support, and accessing resources to make health improvements sustainable. This inconsistency often leads to preventable illnesses, higher healthcare costs, and a reduced quality of life.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )

}
export default LandingPage
import Cards from "../components/Cards"
import Carousel from "../components/Carousel";

// import apertacura from "../assets/apertacura.png";
// import bhc from "../assets/bhc1.jpeg";
import { FunctionComponent } from "react";
import allangrill from "../assets/partners/allangrill.png"
import jasiri from "../assets/partners/2.png"
import ictchamber from "../assets/partners/3.png"
import minict from "../assets/partners/4.webp"
import conscius from "../assets/partners/5.png"
import healthx from "../assets/partners/6.png"
import mental from "../assets/partners/7.png"
import microsoft from "../assets/partners/8.jpg"
import hanga from "../assets/partners/9.jpg"
import startups250 from "../assets/partners/10.png"
import pathcare from "../assets/partners/11.png"
import x from "../assets/partners/12.png"
import PartnerCarousel from "../components/PartnerCarousel";

const slides = [
    {
        title: "Transforming healthcare one habit at a time",
        description: "Our mission is to empower individuals and organizations to prioritize health and well- being through innovative, data - driven tools that simplify health management and improve outcomes",
        imageUrl: "https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg",
    },
    {
        title: "Personalized Health Solutions",
        description: "Experience healthcare tailored to your unique needs with our AI-powered platform that adapts and evolves with you, providing customized recommendations and real-time health insights.",
        imageUrl: "https://images.pexels.com/photos/2383010/pexels-photo-2383010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
        title: "Building Healthier Communities Together",
        description: "Join our growing network of healthcare providers, organizations, and individuals committed to revolutionizing healthcare delivery through collaborative wellness programs and preventive care initiatives.",
        imageUrl: "https://images.pexels.com/photos/4719931/pexels-photo-4719931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    }
];
const partners = [
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: allangrill
    },
    {
        title: "Jasiri",
        description: "",
        imageUrl: jasiri
    },
    {
        title: "ICT Chamber",
        description: "",
        imageUrl: ictchamber
    },
    {
        title: "Conscious",
        description: "",
        imageUrl: conscius
    },
    {
        title: "MINICT",
        description: "",
        imageUrl: minict
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: healthx
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: mental
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: microsoft
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: hanga
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: pathcare
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: startups250
    },
    {
        title: "Allan & Grill foundation",
        description: "",
        imageUrl: x
    },

]
const LandingPage: FunctionComponent = () => {
    
    return (
        <>
            <div>
                <Carousel slides={slides} />
            </div>
            <div className="pt-8">
                <Cards />
            </div>
            <div id="about" className="flex flex-col items-center py-4 w-full">
                <div>
                    <h1 className="text-3xl py-6 font-bold">About us</h1>
                </div>
                <div className="max-w-6xl text-[0.8rem] md:text-base py-4 p-6">
                    <div >
                        <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

                            <div>
                                <p className="text-[0.9rem] md:text-xl mt-4 font-bold">Apertacura</p>
                            </div>
                            <p className="py-4">
                                Why wait for a health problem when you can stay ahead of it? At ApertaCura, we believe wellness should be proactive, not reactive. Our dynamic digital platform blends smart technology with personalized insights, helping individuals and organizations take charge of their well-being before issues arise. With intuitive, data-driven tools, we make health management simple, empowering you to live better, longer, and stronger.
                            </p>
                        </div>
                        {/* <div className="p-4 bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="relative h-50 top-0 overflow-hidden">
                                <img src={bhc} alt="apertacura" className="object-cover hover:scale-105 ransition-transform duration-300 h-full w-full" />
                            </div>
                            <div>
                                <p className="mt-4 text-xl font-bold">Biggest Health Challenge &trade;</p>
                            </div>
                            <p className="py-4">
                                The biggest health challenge today is maintaining consistency in leading a healthy lifestyle. Despite knowing the importance of regular exercise, balanced diets, and preventive care, many individuals struggle with staying motivated, finding the right support, and accessing resources to make health improvements sustainable. This inconsistency often leads to preventable illnesses, higher healthcare costs, and a reduced quality of life.
                            </p>
                        </div> */}

                    </div>

                </div>

            </div>
            <div id="partners" className="flex flex-col items-center overflow-hidden w-full py-4 pb-8">
                <div>
                    <h1 className=" text-center text-3xl py-6 font-bold">Our Partners</h1>
                </div>
                <PartnerCarousel partners={partners} />
                
            </div>

        </>
    )

}
export default LandingPage
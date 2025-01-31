import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import { FunctionComponent } from "react"

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
                    <h1 className="text-3xl font-bold">About us</h1>
                </div>
                <div className="w-2/3 py-4">
                    <p className="py-4">
                        At HealthFirst, we believe in transforming healthcare through personalized, preventive approaches that empower individuals to take control of their well-being. Our dedicated team of healthcare professionals, technologists, and wellness experts works tirelessly to develop innovative solutions that make health management more accessible, intuitive, and effective.
                    </p>
                    <ul className="list-disc flex flex-col gap-y-4">
                        <li>
                            Founded in 2020, we've helped over 10,000 individuals create sustainable healthy habits through our data-driven platform that combines cutting-edge technology with human-centered care.
                        </li>
                        <li>
                            We understand that each person's health journey is unique, which is why we focus on creating customized wellness plans that adapt to individual needs, lifestyles, and goals.
                        </li>
                        <li>
                            We understand that each person's health journey is unique, which is why we focus on creating customized wellness plans that adapt to individual needs, lifestyles, and goals.
                        </li>
                        <li>
                            Our commitment extends beyond individual care to building healthier communities through partnerships with healthcare providers, employers, and organizations that share our vision of a more proactive, preventive healthcare system.
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )

}
export default LandingPage
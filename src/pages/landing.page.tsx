import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import { FunctionComponent } from "react"

const LandingPage: FunctionComponent = () => {
    return (
        <>
        <div>
            <Carousel />
        </div>
        <div>
            <Cards/>
        </div>
            
        </>
    )

}
export default LandingPage
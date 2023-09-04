import Calculator from "../components/Calculator/Calculator"
import CarouselComponent from "../components/Carousel/Carousel"
import lionsImg from "../images/pair-adult-lions 1.png"

const HomePage = () => {
    return(
        <>
            <CarouselComponent/> 
            <Calculator />
            <img className="calculator-image" src={lionsImg} alt="lions" />
        </>
    )
}

export default HomePage
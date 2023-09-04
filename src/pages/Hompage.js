import Calculator from "../components/Calculator/Calculator"
import CarouselComponent from "../components/Carousel/Carousel"
import Footer from "../components/Footer/Footer"
import NavBar from "../components/NavBar/NavBar"

const HomePage = () => {
    return(
        <>
            {/* <NavBar /> */}
            <CarouselComponent/> 
            <Calculator />
            {/* <Footer /> */}
        </>
    )
}

export default HomePage
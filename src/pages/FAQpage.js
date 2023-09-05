import AccordionComponent from "../components/Accordion/Accordion"
import Calculator from "../components/Calculator/Calculator"
import lionsImg from "../images/pair-adult-lions 1.png"

const FAQpage = () => {
    return(
        <div >
            <AccordionComponent />
            <div className="FAQcalc">
                <div style={{float: "left"}}>
                    <Calculator />
                </div>
                <img className="calculator-image" src={lionsImg} alt="lions" style={{position: "static", margin: "44px 0"}}/>
            </div>
        </div>
    )
}

export default FAQpage
import lionImg from "../../images/pair-adult-lions 1.png"
import "./Calculator.css"

const Calculator = () => {
    return(
        <div className="calculator-container">
            <div className="calculator-image">
                <img src={lionImg} alt="lions" />
            </div>
            <div className="calculator-content">
                <h3>1 day safari Serengeti national park</h3>
                <div className="calculator-header">
                    <div>
                        <span style={{ fontSize: "45px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%" }}>12000</span><br />
                        <span style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "500", lineHeight: "136%" }}>square miles</span>
                    </div>
                    <div>
                        <span style={{ fontSize: "45px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%" }}>30%</span><br />
                        <span style={{ fontSize: "14px", fontStyle: "normal", fontWeight: "500", lineHeight: "136%" }}>of Tanzania is National Parks</span>
                    </div>
                </div>
                <div className="calculator">
                    <span style={{ fontSize: "24px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%" }}>Vacation calculator</span><br />
                    <input type="text" defaultValue={1200} />
                    <input type="text" defaultValue={"+"} />
                    <input type="text" defaultValue={1100}/><br />
                    <span style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%"}}>Result: <span style={{fontWeight: "700"}}>2300</span></span>
                </div>
            </div>
        </div>
    )
}

export default Calculator
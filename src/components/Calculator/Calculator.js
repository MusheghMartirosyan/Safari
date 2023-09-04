import lionImg from "../../images/pair-adult-lions 1.png"
import "./Calculator.css"

const Calculator = () => {
    return(
        <div className="calculator-container">
            <div className="calculator-content">
                <p>Serengeti, the ultimate wildlife experience</p>
                <h3>1 day safari Serengeti national park</h3>
                <div className="calculator-header">
                    <div>
                        <span>12000</span><br />
                        <span>square miles</span>
                    </div>
                    <div>
                        <span>30%</span><br />
                        <span>of Tanzania is National Parks</span>
                    </div>

                    <div>
                        <span>35</span><br />
                        <span>species of plains animals</span>
                    </div>
                    <div>
                        <span>500</span><br />
                        <span>species of birds</span>
                    </div>
                </div>
                <div className="calculator">
                    <span style={{ fontSize: "24px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%" }}>Vacation calculator</span><br />
                    <input type="text" defaultValue={1200} />
                    <select name="" id="">
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <input type="text" defaultValue={1100}/><br />
                    <span style={{ fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "106%"}}>Result: <span style={{fontWeight: "700"}}>2300</span></span>
                </div>
            </div>
            <img className="calculator-image" src={lionImg} alt="lions" />
        </div>
    )
}

export default Calculator
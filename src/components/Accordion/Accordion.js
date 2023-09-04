import "./Accordion.css";
import Accordion from 'react-bootstrap/Accordion';

const AccordionComponent = () => {
    return(
        <div className="accordion-content">
            <div className="accordion-header">
                <span>Interesting information</span>
                <h2>Tips for the best experience of Tanzania</h2>
            </div>
            <div className="accordion">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>When to visit Tanzania?</Accordion.Header>
                        <Accordion.Body>Going on safari in Africa is an experience that you certainly won’t ever forget, and epic safari photography makes sure that you are able to share the incredible experience with family and friends. In fact, the photos that you take while on safari are one of the best ways to share this experience with the ones you love.  For that reason, you will want to make sure you are able to take the best pictures you possibly can.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Five Simple Tips to Improve Your Safari Photographs</Accordion.Header>
                        <Accordion.Body>Going on safari in Africa is an experience that you certainly won’t ever forget, and epic safari photography makes sure that you are able to share the incredible experience with family and friends. In fact, the photos that you take while on safari are one of the best ways to share this experience with the ones you love.  For that reason, you will want to make sure you are able to take the best pictures you possibly can.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Tanzania weather</Accordion.Header>
                        <Accordion.Body>Going on safari in Africa is an experience that you certainly won’t ever forget, and epic safari photography makes sure that you are able to share the incredible experience with family and friends. In fact, the photos that you take while on safari are one of the best ways to share this experience with the ones you love.  For that reason, you will want to make sure you are able to take the best pictures you possibly can.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Tanzania visa</Accordion.Header>
                        <Accordion.Body>Going on safari in Africa is an experience that you certainly won’t ever forget, and epic safari photography makes sure that you are able to share the incredible experience with family and friends. In fact, the photos that you take while on safari are one of the best ways to share this experience with the ones you love.  For that reason, you will want to make sure you are able to take the best pictures you possibly can.</Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>TOP destinations</Accordion.Header>
                        <Accordion.Body>Going on safari in Africa is an experience that you certainly won’t ever forget, and epic safari photography makes sure that you are able to share the incredible experience with family and friends. In fact, the photos that you take while on safari are one of the best ways to share this experience with the ones you love.  For that reason, you will want to make sure you are able to take the best pictures you possibly can.</Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default AccordionComponent
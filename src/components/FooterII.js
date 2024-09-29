import React, {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
const FooterII = () => {
    const [showTopBtn, setshowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 400){
                setshowTopBtn(true);
            } else{
                setshowTopBtn(false);
            }
        })
    }, [])

    function goTop(){
        window.scrollTo({
            top:0,
            behavior: 'smooth'
        })
    }
    return(
        <footer id="footer" className="bg-dark text-center text-lg-start">
            <Container className="p-4">
                <Row>
                <Col lg={6} md={12} className="mb-4 mb-md-0">
                <div class="main">
                    <div class="up">
                            <button class="card1">
                                <i class="bi bi-instagram"></i>
                            </button>
                            <button class="card2">
                                <i class="bi bi-facebook"></i>
                            </button>
                    </div>
                    <div class="down">
                            <button class="card3">
                                <i class="bi bi-whatsapp"></i>
                            </button>
                            <button class="card4">
                                <i class="bi bi-telephone-fill"></i>
                            </button>
                    </div>
                    </div>
                </Col>
                <Col lg={6} md={12} className="mb-4 mb-md-0">
                    <h5 className="text-uppercase">Spices Family</h5>
                    <p>
                    We invite you to indulge in the flavors of Spices!
                     Our menu is crafted with love, using only the freshest
                      ingredients to create dishes that are sure to satisfy your cravings.
                       Whether you're a first-time guest or a loyal customer,
                        we promise a memorable dining experience with every visit.
                         Come taste the difference and see why Spices is the perfect place for great food and good times!
                    </p>
                </Col>
                </Row>
            </Container>

            <div className="copyright text-center p-3">
            &copy; 2024 Spices
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
    </footer>
    )
}
export default FooterII
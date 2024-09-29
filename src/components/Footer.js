import React,{useState, useEffect} from "react";
import { Container,Row,Col} from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
const Footer = () => {
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
        <Container id="footer"> 
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
                        <i class="bi bi-github"></i>
                    </button>
                    <button class="card4">
                        <i class="bi bi-discord"></i>
                    </button>
            </div>
            </div>
            <div className='copyright'>
                &copy; 2024 Spices
            </div>
            {
                showTopBtn && (<div className='go-top' onClick={goTop}></div>)
            }
            </Container>
    )
}

export default Footer;
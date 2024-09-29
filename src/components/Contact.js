import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Contact() {
    return(
        <section id='contact' className='block contact-block'>
            <Container>
            <div className='CategoriesTitle text-center'>
                    <h2>Get connected with us</h2>
                </div>
                <Row>
                <Form className='contact-form'>
                    <Row>
                        <Col sm={4}>
                        <Form.Control type="text" placeholder="Enter full name" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="email" placeholder="Enter your email" required />
                        </Col>
                        <Col sm={4}>
                        <Form.Control type="tel" placeholder="Enter your phone number" required />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                        <Form.Control as="textarea" placeholder="Enter Your Message" required />
                        </Col>
                    </Row>    
                    <div className='btn-holder'>
                        <Button className='btn btn-primary' type='submit'>Send</Button>
                    </div>  
                </Form>
                </Row>
            </Container>
            <div className='google-map container'>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.6382642167!2d35.61795912900614!3d31.83591881350622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1720170146223!5m2!1sen!2sjo"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Container>
                <Row>
                <div className='contact-info'>
                    <ul>
                        <li><i class="bi bi-envelope-at-fill"></i>namegmail@gmail.com</li>
                        <li><i class="bi bi-telephone-fill"></i>+000 111 777 0000</li>
                        <li><i class="bi bi-geo-alt-fill"></i>Jordan, Amman</li>
                    </ul>
                </div>
                </Row>
            </Container>
        </section>
    )
}
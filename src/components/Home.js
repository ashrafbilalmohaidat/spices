import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Home = ({search}) => {
    const onSearch = (word) => {
        search(word)
    }

    return(
        <div className="home">
            <Container>
                    <div className="search">
                        <i class="bi bi-search-heart"></i>
                        <input className="form-control" placeholder="Search..." type="text" onChange={(e) => onSearch(e.target.value)}/>
                    </div>
                    <div className='header-content text-center'>
                        <h1 className='text-white header-title ls-2'>Search for your favorite cuisines</h1>
                    </div>
            </Container>
        </div>
        /*<>
            <div className="home">
            <div className="search">
             <i class="bi bi-search-heart"></i>
             <input className="form-control" placeholder="Search..." type="text" onChange={(e) => onSearch(e.target.value)}/>
            </div>
                <div className='header-content text-center'>
                    <h1 className='text-white header-title ls-2'>Search for your favorite cuisines</h1>
                </div>
            </div>
        </>*/
    )
}
export default Home;
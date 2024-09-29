import React from "react";
import {Container, Row} from "react-bootstrap";
import Catigories from "./Catigories";
const CatigoriesList = ({category}) => {

    return(
        <>
        <Container>
        <Row className="my-3">
            <h1 className="CategoriesTitle text-center">categories</h1>
           {
            (category && category.length >=1) ? (category.map((cat)=>{
                return(
                    <Catigories cat={cat} key={cat.idCategory}/>
                )
                
            })) : <h2>No Meals Founds</h2>
           }
        </Row>
        </Container>
        </>
    )
}
export default CatigoriesList;
import React from "react";
import { Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Catigories = ({cat}) => {

    return(
            <>
            <Col xs={6} sm={6} md={4} lg={3}>
            <Link to={`/category/${cat.strCategory}`} className="text-decoration-none">
            <div className="card">
                    <img src={cat.strCategoryThumb || cat.strMealThumb} className="card__image" alt="hu"/>
                    <div className="CardCategor">
                        <div className="w-100 p-2">
                            <p className="CategoryName">{cat.strMeal || cat.strCategory}</p>
                        </div>
                    </div>
            </div>
            </Link>
            </Col>
            </> 
    )
}
export default Catigories;
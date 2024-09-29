import React,{useState, useEffect} from "react";
import axios from "axios";
import { Container,Col,Row } from "react-bootstrap";

const Search = () => {

    return(

        <div className="form-control">
          <input className="input input-alt" placeholder="Search..." type="text"/>
          <span className="input-border input-border-alt"></span>
        </div>

    )
}
export default Search;
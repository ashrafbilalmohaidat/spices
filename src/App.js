import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import CatigoriesList from './components/CatigoriesList'
import Meals from './components/meals';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FooterII from './components/FooterII';
import { Route, Routes} from "react-router-dom";
function App() {
  const [category, setCategory] = useState([]);

 //Get All Gategories
  const getCategory = async () => {
    const data = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
    setCategory(data.data.categories)
  }

  useEffect(() => {
    getCategory();
    },[])
    const search = async (word) =>{
      if(word === ""){
        getCategory();
      }else{
      const data = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
      setCategory(data.data.meals)
      }
    }
  return (

      <>
        <Header />
        <Routes>
  <Route path='/' element={
    <>
      <Home search={search} />
      <CatigoriesList category={category} />
    </>
  } />

  <Route path='/category/:categoryName' element={
    <>
      <Meals />
    </>
  } />

  <Route path='/contact' element={
    <>
      <Contact />
    </>
  } />
</Routes>

 <FooterII/>
      </>
  );
}

export default App;

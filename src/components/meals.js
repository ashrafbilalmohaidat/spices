import React,{useState, useEffect} from "react";
import { useParams } from "react-router";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
const Meals =() =>{
    // Get the category name from the URL parameters using useParams
  const { categoryName } = useParams();

  // State to store the meals, loading, and error
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  // useEffect to fetch meals based on the category name from the URL
  useEffect(() => {
    // Function to fetch meals by category
    const fetchMeals = async () => {
      try {
        //setLoading(true); // Start loading
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
        setMeals(response.data.meals); // Store the meals in state
        console.log(response.data.meals);
      } catch (err) {
        setError('Error fetching meals'); // Set error if request fails
      } finally {
        //setLoading(false); // Stop loading after request completes
      }
    };

    // Fetch meals when the category changes (via the URL param)
    fetchMeals();
  }, [categoryName]); // Effect depends on categoryName


    return(
        
        <Container>
          <Row className="my-5">
            <h1 className="CategoriesTitle text-center my-5 mb-3" >Meals for {categoryName}</h1>
                {
                    meals.map((meal) => {
                        return (
                            <Col key={meal.idMeal} xs={6} sm={6} md={4} lg={3} className="my-1">
                                    <div className="card">
                                        <img src={meal.strMealThumb} className="card__image" alt="hu"/>
                                        <div className="CardCategor">
                                            <div className="w-100 p-2">
                                                <p className="CategoryName">{meal.strMeal}</p>
                                            </div>
                                        </div>
                                    </div>
                            </Col>
                        )
                    })
                }
        </Row>
        </Container>
    )
}

export default Meals;
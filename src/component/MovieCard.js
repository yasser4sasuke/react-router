import React from 'react';
import {Switch,
  Route} from "react-router-dom";
import {Card} from 'react-bootstrap'
import Rating from '@mui/material/Rating';
import Descreption from './descreption';


const MovieCard = ({movie}) => {
    return (
        <Switch>
            <div exact path ='/'>
            <Card style={{ width: '18rem', height:"600px", marginTop: "30px", backgroundColor:"#3F0071" }}>
  <Card.Img style={{width:"287px", height:"350px"}} variant="top" src={movie.posterUrl}/> 
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
    {movie.description}
    </Card.Text>
    <Rating name="customized-10" value={movie.rate} max={10} readOnly />
  </Card.Body>

</Card>
        </div>
          <Route exact path={`/${movie.title}`}>  
     <Descreption movie={movie} style={{ background :'#150050'}}/>   
        </Route>
        </Switch>
    )
}
export default MovieCard
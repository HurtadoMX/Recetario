import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import style from 'styled-components';

function Searched() {
    

    const [searched, setSearched] = useState([]);
    let params = useParams();


    const getSearched = async (name)=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=93c9c25b30b74b30920cff031285fe65&query=${name}`)
        const recipes = await data.json()
        setSearched(recipes.results)
    }

    useEffect(()=>{
        getSearched(params.search);
    },[params.search]);

  return (
    <Grid>
      {searched.map((item)=>{
          return(
              <Card key={item.id}>
                  <Link to={'/recipe/'+item.id}>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  </Link>
              </Card>
          )
      })}
    </Grid>
  )
}


const Grid=style.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 3rem;
`
const Card = style.div`
    img{
        width: 115%;
        border-radius:2rem;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding:1rem;
    }
`

export default Searched

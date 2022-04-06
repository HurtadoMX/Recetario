import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "styled-components";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=93c9c25b30b74b30920cff031285fe65`
    );
    const detail = await data.json();
    setDetails(detail);
    console.log(detail);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instrucciones
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredientes
        </Button>

        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = style.div`
 margin-top: 5rem;
 margin-bottom: 5rem;
 margin-left:-10rem;
 margin-right:-15rem;

 display: flex;
 .active{
   background: linear-gradient(35deg, #494949, #313131);
   color: white;
 }
 h2{
   margin-bottom: 1rem;
 }
 li{
   font-size: 1rem;
   line-height: 2.5rem;
 }
 ul{
   margin-top: 2rem;
 }
 img{
   width: 500px;
 }
`;
const Button = style.button`
 padding: 1rem 2rem;
 color: #313131;
 background: white;
 border: 2px solid black;
 font-weight: 600;
 

`;
const Info = style.div`
 margin-left: 5rem;
 h3{
   font-size:1rem;
 }
`;

export default Recipe;

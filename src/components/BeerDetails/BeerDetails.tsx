import React, { useEffect, useState } from "react";
import "../BeerDetails/BeerDetails.css";

import { Link, useNavigate, useParams } from "react-router-dom";
import { BeersDataProps, RecipesDataProps } from "../../types/Apptypes";
import apiCall from "../../api/apiCall";
import recipesApi from "../../api/recipesApi";
import { APP_ID } from "../../keys";
import { Card } from "antd";

export const BeerDetails = () => {
  const [clickedRecipe, setClickedRecipe] = useState<string>();
  const [relatedRecipe, setRelatedRecipe] = useState<
    RecipesDataProps[] | undefined
  >();
  const [beerDetails, setBeerDetails] = useState<
    BeersDataProps[] | undefined
  >();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    apiCall.get(`${params.page}/${params.id}`, {}).then((res) => {
      setBeerDetails(res.data);
    });
  }, [params]);

  const recipes = Array.from(
    new Set(beerDetails && beerDetails.map((recipe) => recipe.food_pairing))
  );
  const result = recipes.map((item, index) => {
    return item;
  });

  const handleClick = (e: any) => {
    setClickedRecipe(e.target.textContent);
  };

  useEffect(() => {
    recipesApi
      .get(
        `v2?type=any&q=${clickedRecipe}&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
        {}
      )
      .then((res) => setRelatedRecipe(res.data.hits));
  }, [clickedRecipe, recipes, result]);

  return (
    <div className="container">
      <div className="beer_data">
        {params.id &&
          beerDetails &&
          beerDetails.map((item, index) => {
            return (
              <div className="card_container" key={index}>
                <div className="image_container">
                  {item.image_url ? (
                    <img
                      className="beer_image"
                      src={item.image_url}
                      alt="beer_image"
                    />
                  ) : (
                    <img
                      className="not_available"
                      src="data:image/png;base64,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"
                      alt=" not available"
                    />
                  )}
                </div>
                <div className="text_content">
                  <div className="name">{item.name}</div>
                  <div className="tagline">{item.tagline}</div>

                  <div className="alchohol_title">Alchohol:</div>
                  <div className="alchohol">{Math.round(item.abv)} %</div>
                  <div className="first_brewed_title">First Brewed:</div>
                  <div className="first_brewed_content">
                    {item.first_brewed}
                  </div>
                  <div className="description_hd">Description:</div>
                  <div className="beer_description">{item.description}</div>
                  <div className="brewers_tips_hd">Brewers Tips:</div>
                  <div className="brewers_tips_content">
                    {item.brewers_tips}
                  </div>
                  <div className="food_pairing_title">Food Pairing:</div>
                  <div className="food_pairing">
                    {item.food_pairing.map((item, index) => {
                      return (
                        <ul key={index} onClick={handleClick}>
                          <li className="recipes">{item}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div className="recipes_header">Related Recipes</div>
      <div className="recipes_container">
        {relatedRecipe &&
          relatedRecipe.map((item, index) => {
            return (
              <div
                className="recipe_card"
                onClick={() =>
                  navigate(`${item.recipe.uri.replace(/(.*)#recipe_/, "")}`)
                }
              >
                <Card
                  key={index}
                  hoverable
                  style={{ width: 240, height: 470, margin: 6 }}
                  cover={
                    <img
                      alt="recipe_cover"
                      src={item.recipe.images.SMALL.url}
                    />
                  }
                >
                  <div className="recipe_data">
                    <div className="recipe_name">{item.recipe.label}</div>
                    <div className="recipe_servings">
                      Ingredients: {item.recipe.ingredientLines.length}
                    </div>

                    <div className="recipe_servings">
                      Servings: {item.recipe.yield}
                    </div>
                    <div className="recipe_link">
                      <Link
                        to={item.recipe.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.recipe.source}{" "}
                      </Link>
                      <Link to={item.recipe.uri}>Recipe</Link>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

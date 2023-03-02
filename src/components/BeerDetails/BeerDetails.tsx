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
                      src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/08/29184014/brewdog970.jpg"
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
      {relatedRecipe ? (
        <div className="recipes_header">Related Recipes</div>
      ) : (
        ""
      )}
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
                  style={{ width: 240, height: 380, margin: 6 }}
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

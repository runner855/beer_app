import React, { useEffect, useState } from "react";
import recipesApi from "../../api/recipesApi";
import { useParams, useNavigate } from "react-router-dom";
import { APP_ID } from "../../keys";
import { RecipesDataProps } from "../../types/Apptypes";
import "../RecipeDetails/RecipeDetails.css";
import { Button } from "antd";

export const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState<
    RecipesDataProps | undefined
  >();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    recipesApi
      .get(
        `v2/${params.recipeId}?type=public&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
        {}
      )
      .then((res) => setRecipeDetails(res.data));
  }, [params.recipeId]);

  console.log(recipeDetails);
  return (
    <div className="recipe_container">
      <div className="recipe_card_container">
        <div className="image_container">
          <img
            src={recipeDetails && recipeDetails.recipe.images.REGULAR.url}
            alt="recipe_image"
          />
        </div>
        <div className="text_content">
          <div className="recipe_header">
            {recipeDetails && recipeDetails.recipe.label}
          </div>
          <div className="source">
            See full recipe on
            <a href={recipeDetails && recipeDetails.recipe.source}>
              {recipeDetails && recipeDetails.recipe.source}
            </a>
          </div>
          <div className="mealtype_container">
            Meal Type:
            <div className="mealtype_text">
              {recipeDetails && recipeDetails.recipe.mealType}
            </div>
          </div>
          <div className="cuisinetype_container">
            Cuisine Type:
            <div className="cuisinetype_text">
              {recipeDetails && recipeDetails.recipe.cuisineType}
            </div>
          </div>
          <div className="dishtype_container">
            Dish Type:
            <div className="dishtype_text">
              {recipeDetails && recipeDetails.recipe.dishType}
            </div>
          </div>
          <div className="calories_container">
            Calories:
            <div className="calories_text">
              {recipeDetails && recipeDetails.recipe.calories
                ? Math.round(recipeDetails.recipe.calories)
                : ""}
            </div>
          </div>
          <div className="servings_container">
            Servings:
            <div className="servings_text">
              {recipeDetails && recipeDetails.recipe.yield}
            </div>
          </div>
        </div>
      </div>
      <div className="recipe_card_container">
        <div className="ingredients_container">
          <div className="ingredients_title">
            {recipeDetails && recipeDetails.recipe.ingredientLines.length}{" "}
            Ingredients
          </div>
          {recipeDetails &&
            recipeDetails.recipe.ingredientLines.map((item, index) => {
              return (
                <ul key={index}>
                  <li className="ingredients">
                    {item === "undefined" ? "" : item}
                  </li>
                </ul>
              );
            })}
          <div className="preparation_container">
            <div className="preparation_text">Preparation:</div>
            <div className="method_link_container">
              <a href={recipeDetails && recipeDetails.recipe.url}>
                <Button className="method_button">Instructions</Button>
              </a>
              On
              <a
                className="instructions_link"
                href={recipeDetails && recipeDetails.recipe.url}
              >
                {recipeDetails && recipeDetails.recipe.source}
              </a>
            </div>
          </div>
        </div>
        <div className="nutrition_container">
          <div className="nutrition_title">Nutrition:</div>
          <div className="diet">
            {recipeDetails &&
              recipeDetails.recipe.healthLabels.map((item, index) => {
                return (
                  <ul key={index}>
                    <li className="diet_items">{item}</li>
                  </ul>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import recipesApi from "../../api/recipesApi";
import { useParams } from "react-router-dom";
import { APP_ID } from "../../keys";
import { RecipesDataProps } from "../../types/Apptypes";
import "../RecipeDetails/RecipeDetails.css";

export const RecipeDetails = () => {
  const [recipeDetails, setRecipeDetails] = useState<
    RecipesDataProps | undefined
  >();
  const params = useParams();
  useEffect(() => {
    recipesApi
      .get(
        `v2/${params.recipeId}?type=public&app_id=${APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`,
        {}
      )
      .then((res) => setRecipeDetails(res.data));
  }, [params.recipeId]);
  return (
    <div className="recipe_card">
      <div className="recipe_header">
        <img
          src={recipeDetails && recipeDetails.recipe.images.LARGE.url}
          alt="recipe_pic"
        />
        <div className="recipe_text">
          <div className="recipe_title">
            {recipeDetails && recipeDetails.recipe.label}
          </div>
        </div>
      </div>
    </div>
  );
};

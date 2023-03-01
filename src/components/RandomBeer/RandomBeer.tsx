import React, { useEffect } from "react";
import apiCall from "../../api/apiCall";
import { useParams } from "react-router-dom";
import { AppUrls } from "../../types/Apptypes";

export const RandomBeer = () => {
  const params = useParams();
  console.log(params);
  useEffect(() => {
    apiCall.get(`${AppUrls.BEERS}${AppUrls.RANDOM}`, {}).then((res) => {
      console.log(res);
    });
  });
  return <div>random</div>;
};

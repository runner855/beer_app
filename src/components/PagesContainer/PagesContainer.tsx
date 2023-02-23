import React, { useEffect, useState } from "react";
import apiCall from "../../api/apiCall";
export const PagesContainer = () => {
  const [beerData, setBeerData] = useState();
  useEffect(() => {
    apiCall.get(`beers`, {}).then((res) => {
      console.log(res);
      setBeerData(res.data);
    });
  }, []);

  console.log(beerData);
  return <div>PagesContainer</div>;
};

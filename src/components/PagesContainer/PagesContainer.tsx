import React, { useEffect, useState } from "react";
import apiCall from "../../api/apiCall";
import "../PagesContainer/PagesContainer.css";
import { BeersDataProps } from "../../types/Apptypes";
export const PagesContainer = () => {
  const [beerData, setBeerData] = useState<BeersDataProps[] | undefined>();
  useEffect(() => {
    apiCall.get(`beers`, {}).then((res) => {
      console.log(res.data);
      setBeerData(res.data);
    });
  }, []);

  console.log(beerData);
  return (
    <div>
      {beerData &&
        beerData.map((item, index) => {
          return (
            <div key={index} className="beers_container">
              <img
                className="beer_image"
                src={item.image_url}
                alt="beer_image"
              />
            </div>
          );
        })}
    </div>
  );
};

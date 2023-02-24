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
            <div className="card_container" key={index}>
              <div className="text_content">
                <img
                  className="article_image"
                  src={item.image_url}
                  alt="article_image"
                />

                {/* <div className="article_content">{item.abstract}</div>
                <div className="article_author">{item.byline}</div> */}
              </div>
              <div className="image_container">
                <div className="title">{item.name}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

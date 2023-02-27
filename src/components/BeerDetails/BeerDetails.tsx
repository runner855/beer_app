import React, { useEffect, useState } from "react";
import apiCall from "../../api/apiCall";
import { useParams } from "react-router-dom";
import "../BeerDetails/BeerDetails.css";
import { BeersDataProps } from "../../types/Apptypes";

export const BeerDetails = () => {
  const [beerDetails, setBeerDetails] = useState<
    BeersDataProps[] | undefined
  >();
  const params = useParams();

  useEffect(() => {
    params.id &&
      apiCall.get(`${params.page}/${params.id}`, {}).then((res) => {
        console.log(res);
        setBeerDetails(res.data);
      });
  }, [params]);

  console.log(beerDetails);

  //   return (
  //     <div className="beer_details_container">
  //       {beerDetails &&
  //         beerDetails.map((item, index) => {
  //           return (
  //             <div className="beer_details_card" key={index}>
  //               <div className="beer_card_image">
  //                 <img src={item.image_url} alt="beer_details_image" />
  //               </div>
  //               <div className="details_container">
  //                 <div className="beer_name">{item.name}</div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //     </div>
  //   );

  return (
    <div className="container">
      <div className="article_data">
        {beerDetails &&
          beerDetails.map((item, index) => {
            return (
              <div className="card_container" key={index}>
                <div className="text_content">
                  <div className="image_container">
                    <img
                      className="article_image"
                      src={item.image_url}
                      alt="article_image"
                    />
                  </div>
                </div>
                <div className="image_container">
                  <div className="title">{item.name}</div>
                  <div className="article_content">{item.description}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

import { Card } from "antd";
import * as React from "react";
import { BeersDataProps } from "../../types/Apptypes";
import "../PageContent/PageContent.css";
import { useNavigate } from "react-router-dom";
const { Meta } = Card;

type DataProps = {
  beerData: BeersDataProps[] | undefined;
};

export const PageContent = ({ beerData }: DataProps) => {
  const navigate = useNavigate();
  console.log(beerData);
  return (
    <div className="container">
      <div className="article_data">
        {beerData &&
          beerData.map((item, index) => {
            return (
              <div
                className="card_container"
                key={index}
                onClick={() => navigate(`${item.id}`)}
              >
                <Card
                  style={{ width: 250 }}
                  hoverable
                  cover={
                    <div className="image_container">
                      <img alt="example" src={item.image_url} />
                    </div>
                  }
                >
                  <Meta title={item.name} className="name" />
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

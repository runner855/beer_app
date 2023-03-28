import React, { useEffect, useState } from "react";
import apiCall from "../../api/apiCall";
import "../PagesContainer/PagesContainer.css";
import { BeersDataProps } from "../../types/Apptypes";
import { PageContent } from "../PageContent/PageContent";
import { useParams } from "react-router-dom";

export const PagesContainer = () => {
  const [beerData, setBeerData] = useState<BeersDataProps[] | undefined>();
  const params = useParams();

  useEffect(() => {
    apiCall.get(`${params.page}`, {}).then((res) => {
      setBeerData(res.data);
    });
  }, [params]);

  return (
    <div>
      <PageContent beerData={beerData} />
    </div>
  );
};

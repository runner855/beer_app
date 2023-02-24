import * as React from "react";
import { BeersDataProps } from "../../types/Apptypes";

type DataProps = {
  beerData: BeersDataProps[] | undefined;
};

export const PageContent = ({ beerData }: DataProps) => {
  console.log(beerData);
  return <div>PageContent</div>;
};

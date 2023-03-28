import React from "react";
import "../BeersFilter/BeersFilter.css";

type BeersFilterProps = {
  value: string;
  setValue: (value: string) => void;
};

export const BeersFilter = ({ value, setValue }: BeersFilterProps) => {
  return (
    <div className="beers_filter_container">
      <input
        type="search"
        placeholder="Find Your Beer ..."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

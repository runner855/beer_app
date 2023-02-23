import { BEERS_LABEL, RANDOM_LABEL } from "../constants/dictionary";
import { AppUrls } from "../types/Apptypes";
export const NavBarPages = [
  {
    page: BEERS_LABEL,
    to: AppUrls.BEERS,
  },
  {
    page: RANDOM_LABEL,
    to: AppUrls.RANDOM,
  },
];

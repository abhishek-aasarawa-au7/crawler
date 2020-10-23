import { search } from "../configs/routes";
import SearchResult from "../pages/searchResult";

const SearchRoute = [
  {
    path: search,
    exact: true,
    isProtected: true,
    component: SearchResult,
  },
];

export default SearchRoute;

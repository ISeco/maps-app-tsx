import { ChangeEvent, useRef, useContext } from "react";
import { PlacesContext } from "../context";
import { SearchResult } from "./SearchResult";

export const SearchBar = () => {
  const { searchPlacesByQuery } = useContext(PlacesContext);

  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(event.target.value);
    }, 350);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar Lugar..."
        onChange={onQueryChanged}
      />
      <SearchResult />
    </div>
  );
};

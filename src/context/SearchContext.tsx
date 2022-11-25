import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type SearchProviderProps = {
  children: ReactNode;
}

type SearchContextProps = {
  productSearch: string;
  setProductSearch: Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext(
  {} as SearchContextProps
);

export function SearchProvider({ children }: SearchProviderProps) {
  const [productSearch, setProductSearch] = useState("");

  return (
    <SearchContext.Provider
      value={{
        productSearch,
        setProductSearch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => useContext(SearchContext);
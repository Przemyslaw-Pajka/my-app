import { createContext, useEffect, useState } from "react";
import { URLS } from "../services/CONSTANTS";
import { post } from "../services/post";

export const ProductsContext = createContext<any>(null)

export const ProductsContextProvider:React.FC = (props) => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    post({setData, url:URLS.getProducts})
  }, []);

  return (
    <ProductsContext.Provider value={[data, setData]}>
      {props.children}
    </ProductsContext.Provider>
  );
};

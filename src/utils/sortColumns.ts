import { Dispatch } from 'react';

type SortColumnsOptions = {
    e: any,
    order:string,
    setOrder: Dispatch<React.SetStateAction<string>>,
    data: [],
    setData: Dispatch<React.SetStateAction<{}>>
  }
  
 export const sortColumns = ({e, order, setOrder, data, setData}: SortColumnsOptions) => {
    const key = e.target.dataset.buttonType;
  
    const sortedArray = data.slice(0).sort( (a, b) => {
      if (order === "asc") {
        setOrder("des");
        return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0;
      } else if (order === "des") {
        setOrder("asc");
        return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0;
      }
      return 0;
    });
  
    setData(sortedArray);
  };
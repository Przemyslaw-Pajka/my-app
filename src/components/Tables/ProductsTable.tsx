import { useContext, useEffect, useState } from "react";
import { v4 } from 'uuid';
import { ProductsContext } from "../../store/products.context";
import { Product } from "../../types/types";
import { printTable } from "../../utils/printTable";
import { sortColumns } from "../../utils/sortColumns";
import { ButtonDeleteProduct } from "../Buttons/ButtonDeleteProduct/ButtonDeleteProduct";
import { Button, ProductsTableStyled } from "./styles/ProductsTable.styled";

export const ProductsTable:React.FC = (props) => {
  const [data, setData] = useContext<any>(ProductsContext);
  const [keys, setKeys] = useState<String[]>();
  const [order, setOrder] = useState("des");
  const [cost, setCost] = useState(0)

  useEffect(()=>{
    // console.log('data',data)
    if (data && data.length > 0) {
      setKeys(Object.keys(data[0]));
      const newCost:number = data.reduce((previousValue:number, currentValue:any) =>  previousValue + currentValue.price , 0)
      setCost(newCost)
    }
  },[data])


  return (
    <div id="dvContents">
      <ProductsTableStyled responsive="xl" striped bordered hover>
        <thead>
          <tr>{
            keys
              && keys.map((keyHeader,i) =>
                keyHeader !== 'id' &&(
                    <th key={v4()}>
                      <Button
                        type="button"
                        data-button-type={keyHeader}
                        onClick={(e:Event) => sortColumns({e, order, setOrder, data, setData})}>{`${keyHeader}`}</Button>
                    </th>
                  )
              )
          }
          </tr>
        </thead>
        <tbody>
          {data? console.log('data',data) : null}
          {data &&
             data.map((item:Product) => 
              <tr key={v4()}>
                <td key={v4()}>{item.name}</td>
                <td key={v4()}>{item.description}</td>
                <td key={v4()}>{item.category}</td>
                <td key={v4()}>{item.price}</td>
                <td className="cell-btn">
                  <ButtonDeleteProduct itemID={item.id} setData={setData} />
                </td>
              </tr>
            )
          }
        </tbody>
      </ProductsTableStyled>
          {data && 
            <>
                <div>Ilość pozycji to: {data.length}</div>
                <div>Łączny koszt to: {cost}</div> 
                <input type="button" onClick={printTable} value="Print" />
            </>
          }
    </div>
  );

};

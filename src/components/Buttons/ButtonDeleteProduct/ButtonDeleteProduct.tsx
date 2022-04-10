// import { deleteProduct } from "../../../services/deleteProduct";
import { Dispatch } from 'react';
import { URLS } from '../../../services/CONSTANTS';
import { post } from "../../../services/post";
import { ButtonDeleteProductStyled } from './styles/ButtonDeleteProduct.styled';

export const ButtonDeleteProduct:React.FC<{itemID:number,setData:Dispatch<any>}> = ({ itemID, setData }) => {
  const handleDelete = () => {
    post({setData, url:URLS.deleteProduct, dataFromUser:{ id: itemID }})
  }
  
  return (
    <ButtonDeleteProductStyled onClick={handleDelete}>
      DELETE
    </ButtonDeleteProductStyled>
  )
}
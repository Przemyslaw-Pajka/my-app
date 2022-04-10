import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PrimaryButtonStyle } from '../../../styles/PrimaryButtonStyle'

export const Error404Styled = styled.div`
   padding: 40px;

   @media (max-width:450px) {
    padding: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
   }
`
export const LinkStyled = styled(Link)`
    ${PrimaryButtonStyle}
`

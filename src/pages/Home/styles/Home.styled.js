import styled from 'styled-components'

export const HomeStyled = styled.div`
   text-align: center;
   box-sizing: border-box;
   margin: 60px 0px;

   @media (max-width:450px) {
      height: 100vh;
      padding: 58px 15px 58px;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .submit-registration-btn {
         margin-top: 10px;
      }
   }
`
export const HomeHeading = styled.h1`
   font-weight: 400;
   color: var(--font-color-primary);
   font-size: 28px;
   margin: 0;
   &::first-letter {
      font-size: 32px;
   }
`
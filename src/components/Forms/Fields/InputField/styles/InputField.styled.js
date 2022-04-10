import styled from "styled-components";

export const InputFieldStyled = styled.div`
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  input,
  select {
    font-size: 16px;
    line-height: 28px;
    padding: 8px 16px;
    min-height: 44px;
    border: unset;
    border-radius: 4px;
    box-sizing: content-box;
    outline-color: rgb(84 105 212 / 0.5);
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
  input[data-light-mode="true"]:focus-visible,
  select[data-light-mode="true"]:focus-visible {
    outline: 2px #e00 dashed;
    background-color: #fff;
  }
  input[data-light-mode="false"]:focus-visible,
  select[data-light-mode="false"]:focus-visible {
    outline: unset;
    background-color: #fffc97;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Error = styled.div`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin: 10px 0px;
  color: #ff0000;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  display: block;
  margin-bottom: 10px;
  color: #000;
  text-align: left ;
`;

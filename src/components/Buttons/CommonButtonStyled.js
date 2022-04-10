import styled from "styled-components";

export const CommonButtonStyled = styled.button`
  background-color: #5469d4;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  line-height: 28px;
  padding: 8px 16px;
  width: 100%;
  min-height: 44px;
  border-radius: 4px;
  border: 3px transparent dashed;
  outline-color: transparent;
  
  &:hover {
    background: #fff;
    border-style: solid;
    border-color: #5469d4;
    color: rgb(84, 105, 212);
    transition: all 0.3s ease;
  }
  &:focus-visible {
    border-color: #e00;
    color: rgb(84, 105, 212);
    background-color: #fff;
  }
`;
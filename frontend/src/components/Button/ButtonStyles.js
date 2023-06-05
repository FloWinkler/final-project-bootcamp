import styled from "styled-components";

export const Btn = styled.button`
  padding: 5px 17px;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 20px;
  font-weight: 600;
  color: var(--button-text-color);
  background-color: var( --button-background-color);
  cursor: pointer;
  &:hover {
    color: var(--button-text-color);
    box-shadow: 0px 4px 4px 0px var( --box-shadow-color);
    background-color: var(--highlight-color);
  }
  &:active {
      background-color: var(--highlight-color);
  }
`
import styled from "styled-components";

export const LocationList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  padding: 29px 0;

  /* Tablet */
  @media (min-width: 680px) and ( max-width: 1209px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(300px, 300fr));
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    max-width: 700px;
    margin: 20px auto;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 350fr));
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    max-width: 1200px;
    margin: 20px auto;
  }
`
import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`

export const ViewDescription = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--secondary-text-color);
`

export const EventList = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(1, minmax(300px, 400px));
  grid-row-gap: 25px;
  margin: 0 auto;

  /* Tablet */
  @media (min-width: 680px) and ( max-width: 1209px) {
    display: grid;
    grid-template-columns: repeat(1, minmax(600px, 700px));
    grid-column-gap: 40px;
    grid-row-gap: 25px;
    max-width: 700px;
    margin: 0 auto;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(350px, 350px));
    grid-column-gap: 40px;
    grid-row-gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
  }

`
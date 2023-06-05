import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ViewDescription = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--secondary-text-color);
  margin: 8px;
`

export const GameCardsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: 20px;

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

export const ButtonWraper = styled.div`
  position: fixed;
  bottom: 100px;
	z-index: 2;
  transform: translate(-50%, -50%);
  transform-origin: center center;
`

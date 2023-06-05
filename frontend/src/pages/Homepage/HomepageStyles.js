import styled from 'styled-components';
import vrImage from '../../assets/hd_vr.jpg';

export const HomePageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${vrImage});
  opacity: 0.9;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ButtonWrapper = styled.div`
  height: 60px;
  width: 160px;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--highlight-color);
  border-radius: 5px;
  margin-bottom: 150px;
`

export const CenteredBtn = styled.div`
  width: 100%;
  height: 100%;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 26px;
  font-weight: 600;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: var( --button-background-color);
  &:hover {
    color: black;
    font-weight: 800;
    border: 3px solid black;
  }
  &:active {
      background-color: var(--highlight-color);
  }
`;

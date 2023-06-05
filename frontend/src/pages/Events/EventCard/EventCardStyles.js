import styled from "styled-components";
import { SlArrowDown } from 'react-icons/sl';

export const Card = styled.div`
  background-color: var(--plate-color);
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  min-width: 250px;
  &:active {
    border: 2px solid var(--highlight-color);
  }
`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const HeaderLine1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;

  >p:first-child{
    font-weight: 600;
    font-size: 20px;
    color: var(--primary-text-color);
  }

  >div{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
  }
`

export const NumPlayersText = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--secondary-text-color); 
`

export const HeaderLine2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 8px;

  >p:first-child{
    font-weight: 600;
    font-size: 20px;
    color: var(--primary-text-color);
  }
`
export const LearnMoreWraper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;

  /* Desktop */
  @media (min-width: 1210px) {
    display: none;
  }
`

export const LearnMore = styled.p`
  color: var(--highlight-color);
  font-weight: 600;
  font-size: 14px;
`

export const Arrow = styled(SlArrowDown)`
  transition: transform 0.2s ease-in-out;
  stroke-width: 50;
`

export const ArrowIcon = styled(Arrow)`
  transform: ${(props) => (props.$isLearnMoreOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: var(--primary-text-color);
`;

export const CardBody = styled.div`
  margin-top: 18px;
  display: ${(props) => (props.$isLearnMoreOpen ? "block" : "none")};

  /* Desktop */
  @media (min-width: 1210px) {
    display: block;
  }
`

export const DescriptionTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: var(--primary-text-color);
`

export const Description = styled.div`
  font-weight: 600;
  font-size: 12px;
  color: var(--secondary-text-color);
  margin: 3px 0 18px 0;
  white-space: pre-wrap;
  line-height: 15px;
`

export const ButtonWraper = styled.div`
  width: 120px;
  height: 35px;
`
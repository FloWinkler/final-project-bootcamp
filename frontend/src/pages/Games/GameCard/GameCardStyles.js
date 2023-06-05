import styled from "styled-components";
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillCheckCircle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { SlArrowRight } from 'react-icons/sl';

export const FrontCard = styled.div`
`

export const BackCard = styled.div`
`

export const LearnMoreArrow = styled(SlArrowRight)`
  width: 10px;
  height: 10px;
  stroke-width: 50;
  color: var(--highlight-color);
`

export const LearnMoreText = styled.p`
  font-weight: 600;
  color: var(--highlight-color);
`

export const CloseLearnMore = styled.div`
  align-self: flex-end;
`

export const CloseIcon = styled(GrFormClose)`
  align-self: flex-end;
  width: 25px;
  height: 25px;
  color: var(--primary-text-color);
`

export const LearnMoreTitle = styled.p`
  font-weight: 600;
  color: var(--primary-text-color);
  padding-bottom: 3px;
`

export const Description = styled.p`
  width: 300px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  padding-bottom: 12px;
`

export const Card = styled.div`
  min-width: 300px;
  height: 230px;
  background-color: var(--plate-color);
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  border: ${props => props.isGameSelected ? '2px solid var(--highlight-color)' : 'none'};
  border-radius: 10px; 
  display: flex;
  flex-direction: column;
  padding: 11px;
  opacity: ${props => props.isDisabled ? '40%' : '100%'};
  cursor: pointer;
  overflow: scroll;
`

export const ImgWraper = styled.div`
  width: 100%;
  height: 160px;
  align-self: center;
  padding-bottom: 11px;
  position: relative;
  color: var(--secondary-text-color);
  font-size: 12px;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px; 
  }
`

export const PlusIcon = styled(AiFillPlusCircle)`
  color: var(--highlight-color);
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
`

export const SelectedIcon = styled(AiFillCheckCircle)`
  color: var(--highlight-color);
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 10px;
`

export const DetailsWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5px;
`

export const GameTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-text-color);
`

export const GeneralText = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  margin-top: 5px;
`
export const LearnMoreWraper = styled.div`
  align-self: flex-end;
  font-size: 14px;
  font-weight: 600;
  color: var(---highlight-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`
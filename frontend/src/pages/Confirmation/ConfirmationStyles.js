import styled, { keyframes } from 'styled-components';
import { HiUsers } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: var(--background-color);
  position: relative;
`;

export const CheckMarkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  position: fixed;
  bottom: 100px;
`;

export const MessageText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: var(--secondary-text-color);
  opacity: 0;
  animation: ${fadeIn} 1.5s ease-in forwards;
  animation-delay: 0.5s;
  margin-top: 40px;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 12px;
`;

export const IconTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: var(--secondary-text-color);
  font-weight: 600;
  margin-bottom: 3px;
  font-size: 14px;
`

export const PeopleIcon = styled(HiUsers)`
  color: var(--highlight-color);
  width: 20px;
  height: 20px;
`

export const GameIcon = styled(IoLogoGameControllerB)`
  color: var(--highlight-color);
  width: 20px;
  height: 20px;
`

export const LocationIcon = styled(MdLocationOn)`
  color: var(--highlight-color);
  width: 20px;
  height: 20px;
`

export const BookingDetails = styled.div`
  border-radius: 10px;
  border: 1px solid var(--secondary-text-color);
  padding: 24px;
  width: 300px;
`

export const DateTimeWraper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 35px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
  margin-top: 12px;
`

export const DateTimeItem = styled.div`
  p:first-child {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary-text-color);
    margin-bottom: 5px;
  }
`
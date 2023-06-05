import styled from "styled-components";
import { HiUsers } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';


export const EventsContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 33px 38px;
`

export const EventCard = styled.div`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`

export const EventDate = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding: 8px 5px;
  color: var(--primary-text-color);
`

export const Divider = styled.div`
  height: 2px;
  border-radius: 10px;
  background-color: var(--secondary-text-color);
`

export const EventInfo = styled.div`
  padding: 8px 5px;
  font-size: 14px;
  font-weight: 600;
  color: var(--secondary-text-color);
`

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
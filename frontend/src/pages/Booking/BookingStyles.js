import styled from "styled-components";
import { HiUsers } from 'react-icons/hi';
import { IoLogoGameControllerB } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 500px;
`

export const View = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--background-color);
`

export const Main = styled.div`
  margin-top: 40px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Tablet */
  @media (min-width: 680px) and ( max-width: 1209px) {
    width: 600px;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const BookingResume = styled.div`
  width: 300px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  background-color: var(--plate-color);
  display: flex;
  flex-direction: column;

  /* Tablet */
  @media (min-width: 680px) and ( max-width: 1209px) {
    width: 600px;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    width: 40%;
    margin: 0 40px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    align-self: stretch;
  }
`

export const ResumeTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BigDarkText = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: var(--primary-text-color);
  margin-bottom: 12px;
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

export const Form = styled.form`
  width: 300px;
  box-sizing: border-box;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;


  /* Tablet */
  @media (min-width: 680px) and ( max-width: 1209px) {
    width: 600px;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    margin: 0 40px;
    width: 60%;
    gap: 30px;
  }
`

export const InputWraper = styled.div`
  border: 1px solid var(--secondary-text-color);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 10px 10px 26px;
  background-color: var(--plate-color);

  >label{
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
    color: var(--secondary-text-color);
  }

  >input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 20px;
    font-weight: 600;
    font-family: inherit;
    color: var(--primary-text-color);
    background-color: var(--plate-color);
  }
`

export const ButtonWraper = styled.div`
  width: 200px;
  height: 40px;
  align-self: center;
  margin-top: 30px;
`

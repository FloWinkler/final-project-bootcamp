import styled from "styled-components";
import { keyframes } from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import Button from "../../Button/Button";
import { NavLink } from "react-router-dom"


const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  60% {
    transform: translateY(10%);
  }
  80% {
    transform: translateY(-5%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const UserIcon = styled(FaUserAlt)`
width: 25px;
height: 25px;
color: var( --highlight-color);
`;

export const UserAvatar = styled.img`
  width: 25px;
  height: 25px;
  border: 2px solid var(--highlight-color);
  border-radius: 50%;
  object-fit: cover;
`

export const UserDropdownContainer = styled.div`
position: fixed;
top: 50px;
right: 7px;
width: 370px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 10px;
color: var(--highlight-color);
box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
background-color: var(--plate-color);
animation: ${slideDown} 0.5s ease-in-out forwards;
z-index: 1000; // to make sure it's on top of the header
border: 2px solid var(--highlight-color);
`;

export const UserThemeWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: var(--primary-text-color);
`;

export const UserForm = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 15px;
`

export const UserInputWrapper = styled.div`
border-radius: 5px;
display: flex;
flex-direction: row;
align-items: center;
gap: 10px;
padding: 10px 10px 10px 26px;
border: 1px solid var(--secondary-text-color);

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
`;

export const UserButtonWrapper = styled.div`
justify-content: center;
display: flex;
`;

export const LoginButton = styled(Button)`
`;

//If user is logged in

export const UserNameText = styled.p`
font-size: 24px;
font-weight: 600;
`;

export const UserProfileAvatar = styled.img`
height: 80px;
height: 80px;
border-radius: 10px;
margin-top: 10px;
margin-bottom: 10px;
`

export const UserInfoWrapperLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 30px;
`;

export const UserInfoWrapperRight = styled.div`
display: flex;
flex-direction: column;
align-items: start;
padding-left: 30px;
padding-top: 17px;
`;

export const UserInfoText = styled.p`
font-size: 20px;
font-weight: 600;
margin: 0;
border: none;
cursor: pointer;

  &:hover {
    color: var(--highlight-color);
  }
`;

export const UserInfoSmallText = styled.p`
font-size: 14px;
color: var(--secondary-text-color);
margin: 0;
margin-top: 5px;
margin-bottom: 10px;
`;

export const UserIconUserProfile = styled(FaUserAlt)`
width: 14px;
height: 14px;
color: var( --highlight-color);
margin-right: 5px;
`;

export const StatisticsIconProfile = styled(IoStatsChart)`
width: 15px;
height: 15px;
color: var( --highlight-color);
margin-right: 5px;
`

export const EventsIconProfile = styled(BsFillCalendarCheckFill)`
width: 14px;
height: 14px;
color: var( --highlight-color);
margin-right: 5px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }
`;
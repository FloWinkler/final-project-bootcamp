import { keyframes } from "styled-components";
import styled from "styled-components";
import { RiSettings3Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { GiEarthAfricaEurope } from "react-icons/gi";

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

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #000;
opacity: 0.3;
z-index: 1;
`;

export const DarkModeIcon = styled(MdDarkMode)`
margin-right: 9px;
color: var(--highlight-color);
`;

export const LanguageIcon = styled(GiEarthAfricaEurope)`
margin-right: 9px;
color: var(--highlight-color);
`;

export const SettingsIcon = styled(RiSettings3Fill)`
width: 25px;
height: 25px;
color: var(--highlight-color);
`;

export const SettingsDropdownContainer = styled.div`
position: fixed;
top: 50px;
right: 10px;
width: 360px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
border-radius: 10px;
color: var(--highlight-color);
box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
background-color: var(--plate-color);
animation: ${slideDown} 0.5s ease-in-out forwards;
z-index: 1000; // to make sure it's on top of the header
border: 2px solid var(--highlight-color);

  /* // Tablet and mobile
  @media (max-width: 768px) {
    width: 260px;
    height: 120px;
  } */
`;

export const ThemeWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
font-weight: 600;
font-size: 20px;
color: var(--primary-text-color);
`;

export const LightMode = styled.label`
margin-bottom: 10px;
cursor: pointer;
`;

export const DarkMode = styled.label`
margin-bottom: 5vw;
cursor: pointer;
`;

export const ToggleContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 10px;
`;

export const ToggleInput = styled.input`
position: relative;
display: inline-block;
width: 60px;
height: 34px;
margin: 0 10px;
appearance: none;
border-radius: 34px;
outline: none;
cursor: pointer;
transition: all 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    width: 26px;
    height: 26px;
    border-radius: 50%;
    top: 4px;
    left: 4px;
    transition: all 0.3s ease;
  }

  &:checked {
    background-color: var(--highlight-color);

    &::before {
      transform: translateX(26px);
    }
  }
`;

export const Toggle = styled.input`
position: relative;
display: inline-block;
width: 40px;
height: 14px;
margin: 0 10px;
appearance: none;
background-color: var(--secondary-text-color);
border-radius: 34px;
outline: none;
cursor: pointer;
transition: all 0.3s ease;

  &::before {
    position: absolute;
    content: "";
    width: 23px;
    height: 23px;
    border-radius: 50%;
    top: -5px;
    left: -1px;
    background-color: var(--primary-text-color);
    box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
    transition: all 0.3s ease;
  }

  &:checked {
    background-color: var(--highlight-color);

    &::before {
      transform: translateX(18px);
    }
  }
`;

export const ToggleLabel = styled.label`
font-size: 16px;
font-weight: 600;
margin-right: 20px;
cursor: pointer;
`;

export const LanguageSelect = styled.select`
margin-left: 10px;
padding: 5px;
font-family: 'Rajdhani';
font-style: normal;
font-weight: 600;
font-size: 14px;
background-color: var( --button-background-color);
color: var(--button-text-color);
border: none;
border-radius: 5px;
cursor: pointer;
transition: all 0.3s ease;
border-radius: 5px;
>option{
  font-weight: 600;
  font-size: 14px;
  color: var(--button-text-color);
}
&:hover {
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
}
  &:focus {
    outline: none;
    box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  }
`;
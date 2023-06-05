
import styled from "styled-components";
import { SlArrowLeft } from "react-icons/sl";
import vrImage from '../../assets/hd_vr.jpg';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 39px;
  background-color: var(--background-color);
  background-repeat: no-repeat;
`

export const HeaderContainerWithoutBackButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px 39px;
  background-color: var(--background-color);
  background-image: url(${vrImage});
  opacity: 0.9;
`

export const ArrowIcon = styled(SlArrowLeft)`
  width: 15px;
  height: 26px;
  stroke-width: 100;
  color: var( --highlight-color);
`
export const Btn = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background-color: var(--background-color);
  cursor: pointer;
`
export const BtnText = styled.div`
  margin-left: 5px;
  font-family: inherit;
  font-weight: 600;
  font-size: 14px;
  color: var(--secondary-text-color);
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  align-self: end;
`
export const LinkWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
`
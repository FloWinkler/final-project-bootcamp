import styled from "styled-components";

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // changes needed here for responsive Webpage
  min-width: 300px;
  padding: 11px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  background-color: var(--plate-color);
  cursor: pointer;

  &:active {
    border: 2px solid var(--highlight-color);
  }
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 95%;
  background-color: var(--plate-color);
`
// change to styled.img
export const ImgWrapper = styled.div`
  width: 100%;
  height: 160px;
  align-self: center;
  padding-bottom: 11px;
  position: relative;

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px; 
  }
`
export const CenterNameAndLocationWrapper = styled.div`

display: flex;
flex-direction: column;
align-items: center;
width: 95%;
margin-bottom: 10px;
justify-content: center;
background-color: var(--plate-color);
`
export const CenterNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: var(--primary-text-color);
  background-color: var(--plate-color);
`
export const LocationNameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 95%;
  font-size: 14px;
  font-weight: 600;
  margin: 5px 0 0 0;
  color: var(--secondary-text-color);
  background-color: var(--plate-color);
`

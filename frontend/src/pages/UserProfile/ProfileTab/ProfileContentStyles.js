import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 33px 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  img{
    width: 115px;
    height: 97px;
  }

  p{
    font-weight: 600;
    font-size: 14px;
    color: var(--secondary-text-color);
  }
`

export const Form = styled.div`
  width: 234px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--secondary-text-color);
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 7px 7px 7px 13px;
  background-color: var(--plate-color);

  >label{
    font-size: 14px;
    font-weight: 600;
    flex-shrink: 0;
    color: var(--secondary-text-color);
  }

  >input {
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    color: var(--primary-text-color);
    background-color: var(--plate-color);
  }
`

export const ButtonWraper = styled.div`
  width: 200px;
  height: 40px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
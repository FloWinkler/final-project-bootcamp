import { useNavigate } from "react-router-dom";
import { HomePageContainer, CenteredBtn, ButtonWrapper } from "./HomepageStyles";

const Homepage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/location");
  };

  return (
    <>
      <HomePageContainer>
        <ButtonWrapper>
          <CenteredBtn onClick={handleClick}> Start </CenteredBtn>
        </ButtonWrapper>
      </HomePageContainer >
    </>
  );
}

export default Homepage;

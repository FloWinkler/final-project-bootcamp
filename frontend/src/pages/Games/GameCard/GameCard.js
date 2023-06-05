import { useState } from "react";
import { BackCard, Card, CloseLearnMore, Description, LearnMoreTitle, DetailsWraper, FrontCard, GameTitle, GeneralText, ImgWraper, LearnMoreWraper, PlusIcon, SelectedIcon, CloseIcon, LearnMoreArrow, LearnMoreText } from "./GameCardStyles";
import ReactCardFlip from 'react-card-flip';

const GameCard = ({ game, onGameClick, isDisabled, isGameSelected }) => {
  const [isBackCardShown, setIsBackCardShown] = useState(false);

  const handleFlipClick = (e) => {
    e.preventDefault();
    setIsBackCardShown(prev => !prev);
  }

  const handleGameClick = (gameID) => {
    if (isDisabled) {
      return;
    }

    onGameClick(gameID);
  }

  return (
    <ReactCardFlip isFlipped={isBackCardShown} flipDirection="horizontal" flipSpeedBackToFront="0.7" flipSpeedFrontToBack="0.7">
      <FrontCard>
        <Card isGameSelected={isGameSelected} isDisabled={isDisabled && !isGameSelected}>
          <ImgWraper onClick={() => handleGameClick(game.game_id)}>
            <img src={game.game_image} alt="vr game"></img>
            {!isGameSelected ? <PlusIcon /> : <SelectedIcon />}
          </ImgWraper>
          <DetailsWraper >
            <div>
              <GameTitle>{game.game_name}</GameTitle>
              <GeneralText>Genre: {game.game_genre}</GeneralText>
              <GeneralText>Mininum age: 10 years</GeneralText>
            </div>
            <LearnMoreWraper onClick={handleFlipClick}>
              <LearnMoreText>Learn more</LearnMoreText>
              <LearnMoreArrow />
            </LearnMoreWraper>
          </DetailsWraper>
        </Card>
      </FrontCard>

      <BackCard>
        <Card>
          <CloseIcon onClick={handleFlipClick} />
          <div>
            <LearnMoreTitle>Genre</LearnMoreTitle>
            <Description>{game.game_genre}</Description>

            <LearnMoreTitle>Description</LearnMoreTitle>
            <Description>{game.description}</Description>

            <LearnMoreTitle>Play Time</LearnMoreTitle>
            <Description>{game.play_time} minutes</Description>
          </div>
        </Card>
      </BackCard>
    </ReactCardFlip>

  );
}

export default GameCard;
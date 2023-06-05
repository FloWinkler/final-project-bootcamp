import { IoLogoGameControllerB } from 'react-icons/io';
import { useState } from "react";
import { ArrowIcon, ButtonWraper, Card, CardBody, CardHeader, Description, DescriptionTitle, HeaderLine1, HeaderLine2, LearnMore, LearnMoreWraper, NumPlayersText } from './EventCardStyles';
import Button from '../../../components/Button/Button';

const EventCard = ({ event, onEventSelected }) => {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const handleLearnMoreClick = () => {
    setIsLearnMoreOpen(prev => !prev);
  }

  return (
    <Card onClick={handleLearnMoreClick}>
      <CardHeader>
        <HeaderLine1>
          <p>{event.event_title}</p>
          <div>
            <IoLogoGameControllerB style={{ color: 'var(--highlight-color)' }} />
            <NumPlayersText>2-5 Players</NumPlayersText>
          </div>
        </HeaderLine1>
        <HeaderLine2>
          <p>{event.event_price} CHF</p>
          <LearnMoreWraper>
            <LearnMore>{isLearnMoreOpen ? 'Close' : 'Learn more'}</LearnMore>
            <ArrowIcon $isLearnMoreOpen={isLearnMoreOpen} />
          </LearnMoreWraper>
        </HeaderLine2>
      </CardHeader>
      <CardBody $isLearnMoreOpen={isLearnMoreOpen}>
        <DescriptionTitle>Description</DescriptionTitle>
        <Description>
          <p>
            {event.event_description}
          </p>
          <p> </p>
          <p>
            A 5th player can optionally be booked for all adventures.
          </p>
        </Description>
        <ButtonWraper>
          <Button onClick={() => onEventSelected(event.event_id)} text='Book now' />
        </ButtonWraper>
      </CardBody>

    </Card>
  );
}

export default EventCard;
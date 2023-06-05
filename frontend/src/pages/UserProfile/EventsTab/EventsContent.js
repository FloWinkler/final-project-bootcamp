import { EventDate, Divider, EventCard, EventsContainer, EventInfo, IconTextWrapper, PeopleIcon, GameIcon, LocationIcon } from "./EventsContentStyles";

const EventsContent = () => {
  return (
    <EventsContainer>
      <EventCard>
        <EventDate>30 Apr - 14:00h</EventDate>
        <Divider />
        <EventInfo>
          <IconTextWrapper>
            <PeopleIcon />
            <p>2-5 players</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <GameIcon />
            <p>Desert Storm</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <LocationIcon />
            <p> Riedwiesenstrasse 23, Zurich</p>
          </IconTextWrapper>
        </EventInfo>
      </EventCard>
      <EventCard>
        <EventDate>15 May - 18:30h</EventDate>
        <Divider />
        <EventInfo>
          <IconTextWrapper>
            <PeopleIcon />
            <p>2 players</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <GameIcon />
            <p>Tikal</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <LocationIcon />
            <p> Riedwiesenstrasse 23, Zurich</p>
          </IconTextWrapper>
        </EventInfo>
      </EventCard>
      <EventCard>
        <EventDate>20 May - 19:30h</EventDate>
        <Divider />
        <EventInfo>
          <IconTextWrapper>
            <PeopleIcon />
            <p>4 players</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <GameIcon />
            <p>DesertStorm</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <LocationIcon />
            <p> Riedwiesenstrasse 23, Zurich</p>
          </IconTextWrapper>
        </EventInfo>
      </EventCard>
    </EventsContainer>
  );
}

export default EventsContent;
import { EventList, MainContainer, TitleContainer, ViewDescription } from "./EventsStyles";
import EventCard from "./EventCard/EventCard";
import ViewTitle from "../../components/ViewTitle/ViewTitle";
import useGetMissing from "../../useGetMissing";
import { useEffect, useState } from "react";
import truevrAPI from "../../axios/truevrAPI";
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { updateEventData } from "../../redux/slices/booking";

const Events = ({ onEventSelected }) => {
  useGetMissing();

  const { locationID } = useParams();
  const dispatch = useDispatch();

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    //---------------- GET ALL EVENTS FROM API------------------
    const getAllEvents = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await truevrAPI.get('/event/', config);
        setAllEvents(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllEvents();
  }, [])

  //---------------- FUNCTION TO NAVIGATE TO GAMES------------------
  const handleEventSelected = (eventID) => {
    //------------Store only the selected event in the store-------------
    const selectedEvent = allEvents.find(event => event.event_id === eventID)
    dispatch(updateEventData(selectedEvent));
    onEventSelected(locationID, eventID);
  }

  return (
    <MainContainer>
      <TitleContainer>
        <ViewTitle title='Choose an event' />
      </TitleContainer>
      <EventList>
        {
          allEvents?.map((event) => {
            return <EventCard
              key={event.event_id}
              event={event}
              onEventSelected={handleEventSelected}
            />
          })
        }
      </EventList>
    </MainContainer>
  );
}

export default Events;
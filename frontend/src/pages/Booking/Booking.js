import useGetMissing from '../../useGetMissing';
import ViewTitle from '../../components/ViewTitle/ViewTitle';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';
import truevrAPI from '../../axios/truevrAPI';
import { useParams } from 'react-router-dom';
import { Form, InputWraper, BookingResume, DateTimeWraper, DateTimeItem, IconTextWrapper, View, Main, ButtonWraper, BigDarkText, ResumeTitle, PeopleIcon, GameIcon, LocationIcon, IconTextWrapperGames, PacmanLoading, LoadingContainer } from './BookingStyles';
import { PacmanLoader } from "react-spinners";

const createCheckoutSession = async (data) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await truevrAPI.post(`/payments/create_checkout_session/`, data, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const Booking = () => {
  useGetMissing();
  const { locationID, eventID, gamesIDs, dateString, timeString, slotID } = useParams();
  const location = useSelector(state => state.booking.bookingData.location);
  const event = useSelector(state => state.booking.bookingData.event);
  const games = useSelector(state => state.booking.bookingData.games);
  const dateTime = useSelector(state => state.booking.bookingData.dateTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const dataStripe = {
      formData: Object.fromEntries(data.entries()),
      bookingData: {
        'locationID': locationID,
        'eventID': eventID,
        'gamesIDs': gamesIDs,
        'dateString': dateString,
        'timeString': timeString,
        'slotID': slotID,
      }
    }
    console.log({ dataStripe })
    const stripeURL = await createCheckoutSession(dataStripe);
    window.location.replace(stripeURL.url)
  }


  if (location === undefined || event === undefined || games === undefined || dateTime === undefined ||
    location === null || event === null || games === null || dateTime === null) {
    return (
      <LoadingContainer>
        <PacmanLoader color='#79CFF2' />
      </LoadingContainer>
    );
  }
  return (
    <View>
      <ViewTitle title='Booking details'></ViewTitle>
      <Main>
        <BookingResume>
          <ResumeTitle>
            <BigDarkText>{event?.event_title}</BigDarkText>
            <BigDarkText>{event?.event_price} CHF</BigDarkText>
          </ResumeTitle>
          <IconTextWrapper>
            <PeopleIcon />
            <p>2-5 players</p>
          </IconTextWrapper>
          <IconTextWrapper>
            <GameIcon />
            <div>
              {
                Object.keys(games).map(key => {
                  return <p key={key}>{games?.[key].game_name}</p>
                })
              }
            </div>
          </IconTextWrapper>
          <IconTextWrapper>
            <LocationIcon />
            <p>{location?.center_address}, {location?.center_city}</p>
          </IconTextWrapper>
          <DateTimeWraper>
            <DateTimeItem>
              <p>Date</p>
              <p>{dateTime?.date.split('-').reverse().join('-')}</p>
            </DateTimeItem>
            <DateTimeItem>
              <p>Time</p>
              <p>{dateTime?.start_time}h</p>
            </DateTimeItem>
          </DateTimeWraper>
        </BookingResume>
        <Form onSubmit={handleSubmit}>
          <InputWraper>
            <label>Name</label>
            <input type='text' name='name'></input>
          </InputWraper >
          <InputWraper>
            <label>E-mail</label>
            <input type='email' name='email'></input>
          </InputWraper>
          <InputWraper>
            <label>Phone</label>
            <input type='text' name='phone'></input>
          </InputWraper>
          <ButtonWraper>
            <Button text='Proceed to checkout' type='submit' />
          </ButtonWraper>
        </Form >
      </Main>
    </View >
  );
}

export default Booking;
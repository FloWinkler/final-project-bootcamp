import React from 'react';
import {
  ConfirmationWrapper,
  CheckMarkWrapper,
  MessageText,
  IconTextWrapper,
  PeopleIcon,
  GameIcon,
  LocationIcon,
  BookingDetails,
  DateTimeWraper,
  DateTimeItem,
  Title,
} from './ConfirmationStyles';
import animationData from '../../assets/lf20_w8cudppm.json';
import Lottie from 'react-lottie';
import ViewTitle from '../../components/ViewTitle/ViewTitle';
import useGetMissing from '../../useGetMissing'


const Confirmation = () => {
  useGetMissing();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <ConfirmationWrapper>
      <ViewTitle title={"Payment Completed"}></ViewTitle>
      <BookingDetails>
        <Title>Single booking</Title>
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
        <DateTimeWraper>
          <DateTimeItem>
            <p>Date</p>
            <p>30.04.2023</p>
          </DateTimeItem>
          <DateTimeItem>
            <p>Time</p>
            <p>14:00h</p>
          </DateTimeItem>
        </DateTimeWraper>
      </BookingDetails>
      <MessageText>Thank you for your booking!</MessageText>
      <CheckMarkWrapper>
        <Lottie options={defaultOptions} />
      </CheckMarkWrapper>
    </ConfirmationWrapper>
  );
};

export default Confirmation;

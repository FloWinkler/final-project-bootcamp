import styled from "styled-components";

export const CompContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

   /* Tablet */
   @media (min-width: 680px) and ( max-width: 1209px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Desktop */
  @media (min-width: 1210px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 60px;
    margin-top: 30px;
  }
`
export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* min-width: 85%; */
  max-width: 300px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 11px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
  background-color: var(--plate-color);

  /* Desktop */
  @media (min-width: 1210px) {
    margin: 0px;
  }
`
export const CalendarContainer = styled.div`
  /* ~~~ CONTAINERSTYLES ~~~ */
  display: flex;
  justify-content: center;
  width: 95%;
  height: 95%;
  margin-top: 10px;
  padding: 5px;
  /* ~~~ NAVIGATION BAR ~~~ */
  .react-calendar__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    /* ~~~ MONTHYEAR MIDDLE-BTN ~~~ */
    .react-calendar__navigation__label {
      font-family: inherit;
      font-style: normal;
      font-size: 20px;
      font-weight: 600;
      color: var(--primary-text-color);
      cursor: unset;
      &:hover {
        background-color: var(--plate-color);
        box-shadow: none;
      }
      &:active {
        background-color: var(--plate-color);
        box-shadow: none;
      }
    }
    /* ~~~ ARROW LEFT/RIGHT-BTNS ~~~ */
    .react-calendar__navigation__arrow {
      margin-right: 15px;
      margin-left: 15px;
      font-size: 30px;
      font-weight: 600;
      color: var(--primary-text-color);
      &:hover {
        color: var(--button-text-color);
        box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
        background-color:  var(--highlight-color);
      }
      &:active {
      background-color: var(--highlight-color);
      box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
      }
    }
  }
  /* ~~~ WEEKDAYS ~~~ */
  .react-calendar__month-view__weekdays {
    text-align: center;
    padding: 10px 0;
    font-family: inherit;
    font-style: normal;
    font-size: 14px;
    font-weight: 600;
    color: var(--secondary-text-color);
  }
    /* ~~~ REMOVE DEFAULT UNDERLINE-DOTS ~~~ */
    .react-calendar__month-view__weekdays__weekday abbr{
    text-decoration: none;
    }
  /* ~~~ BUTTONS ~~~ */
  button {
    font-family: inherit;
    font-style: normal;
    font-size: 16px;
    font-weight: 700;
    min-height: 40px;
    min-width: 40px;
    margin-top: 2px;
    margin-bottom: 4px;
    margin-left: 2px;
    margin-right: 2px;
    border: 0;
    border-radius: 50px;
    color: var(--primary-text-color);
    background-color: var(--plate-color);
    cursor: pointer;
    &:hover {
      color: var(--button-text-color);
      box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
      background-color: var(--highlight-color);
    }
    &:active {
      background-color: var(--highlight-color);
      box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
    }
  }
  /* ~~~ DAY GRID ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%; 
    margin-left: 0.6%;
    .react-calendar__tile {
      max-width: initial !important;
    }
    .react-calendar__tile--range {
      color: var(--button-text-color);
      box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
      background-color: var(--highlight-color);
    }
  }
  /* ~~~ NEIGHBORING MONTH ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
  }
  /* ~~~ WEEKEND-DAYS ~~~ */
  .react-calendar__month-view__days__day--weekend {
  }
  /* ~~~ ALL THE DAYS ~~~ */
  .react-calendar__month-view__days__day {
    /* no designe for now bc it overwrites the more specific*/
  }
`;
export const TimeSlotsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  background-color: var(--background-color);
`
export const TimeSlotsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20px;
  column-gap: 32px;
  background-color: var(--background-color);

  /* Desktop */
  @media (min-width: 1210px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`
export const TimeSlots = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 11px 48px;
  text-align: center;
  font-family: inherit;
  font-style: normal;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 5px;
  color: var(--button-text-color);
  background-color: var(--button-background-color);
  cursor: pointer;
  &:hover {
    color: var(--button-text-color);
    box-shadow: 0px 4px 4px 0px var(--box-shadow-color);
    background-color: var(--highlight-color);
  }
  &:active {
    background-color: var(--highlight-color);
  }
`
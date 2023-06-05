import Calendar from "react-calendar";
import { CompContainer, CalendarWrapper, CalendarContainer, TimeSlotsWrapper, TimeSlotsContainer, TimeSlots } from "./CalendarTimesCompStyles";
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateDateTimeData } from "../../../redux/slices/booking";
import { PacmanLoader } from "react-spinners";

function CalendarTimesComp({ onDateTimeSelected }) {
  const dispatch = useDispatch();
  const { locationID, eventID, gameIDs } = useParams()

  const handleDateTimeSelected = (slotID, dateString, start_time, end_time) => {
    const dateTimeObj = {
      id: slotID,
      date: dateString,
      start_time: start_time,
      end_time: end_time
    }
    dispatch(updateDateTimeData(dateTimeObj));
    onDateTimeSelected(locationID, eventID, gameIDs, dateString, start_time, slotID);
  }
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const config = {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
  };

  const [date, setDate] = useState(new Date());
  // complicated hack to get the right string-format for the Fetch-Url
  let getFullYear = date.getFullYear()
  let getMonth = String(date.getMonth() + 1)
  if (getMonth.length === 1) { getMonth = "0" + getMonth }
  let getDate = String(date.getDate())
  if (getDate.length === 1) { getDate = "0" + getDate }

  let formatedDate = `${getFullYear}-${getMonth}-${getDate}`
  // see the selected day (when clicked) with it's details like year and month
  //console.log(date)

  const url = `https://truevrbooking.propulsion-learn.ch/backend/api/v1/slot/${locationID}/${formatedDate}/`

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(url, config);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData()
  }, [date]);


  return (
    <CompContainer>
      <CalendarWrapper>
        <CalendarContainer>
          <Calendar
            minDetail="month"
            prev2Label={null}
            next2Label={null}
            locale={"en-US"}
            onChange={setDate}
            value={date}
          // showNeighboringMonth={false} // problem: first day not displayed correctly
          />
        </CalendarContainer>
      </CalendarWrapper>
      <TimeSlotsWrapper>
        <TimeSlotsContainer>
          {
            response ?
              response.map((slot, index) =>
                <TimeSlots
                  onClick={() =>
                    // using slice to only render only the time from the choosen DATE on TimeSlot
                    handleDateTimeSelected(slot.slot_id, formatedDate, slot.start_time.slice(11, 16), slot.end_time.slice(11, 16))}
                  key={index}
                >
                  {String(slot.start_time.slice(11, 16))}
                </TimeSlots>
              )
              :
              <PacmanLoader color='#79CFF2' />
          }
        </TimeSlotsContainer>
      </TimeSlotsWrapper>
    </CompContainer>
  );
}

export default CalendarTimesComp;

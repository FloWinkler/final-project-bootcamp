import CalendarTimesComp from "./CalendarTimesComp/CalendarTimesComp";
import ViewTitle from "../../components/ViewTitle/ViewTitle";

const CalendarTimes = ({ onDateTimeSelected }) => {

  const handleDateTimeSelected = (locationID, eventID, gameName, dateString, timeString, slotID) => {
    onDateTimeSelected(locationID, eventID, gameName, dateString, timeString, slotID);
  }
  return (
    <>
      <ViewTitle title="Choose a date" />
      <CalendarTimesComp onDateTimeSelected={handleDateTimeSelected}></CalendarTimesComp>
    </>
  );
}

export default CalendarTimes;
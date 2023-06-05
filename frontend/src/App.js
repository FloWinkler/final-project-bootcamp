import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Location from './pages/Location/Location';
import Events from './pages/Events/Events';
import Header from "./components/Header/Header";
import Games from "./pages/Games/Games";
import CalendarTimes from "./pages/CalendarTimes/CalendarTimes";
import Booking from "./pages/Booking/Booking";
import Confirmation from "./pages/Confirmation/Confirmation";
import NotFound from "./pages/NotFound/NotFound";
import UserProfile from "./pages/UserProfile/UserProfile";

const App = () => {
  const navigate = useNavigate();

  const handleLocationSelected = (locationID) => {
    //Navigates to Event View
    navigate(`/location/${locationID}/event`)
  }

  const handleEventSelected = (locationID, eventID) => {
    //Navigates to Games View
    navigate(`/location/${locationID}/event/${eventID}/game`)
  }

  const handleGameSelected = (locationID, eventID, gameIDs) => {
    //Navigates to CalendarTimes View
    navigate(`/location/${locationID}/event/${eventID}/game/${gameIDs}/datetime`)
  }

  const handleDateTimeSelected = (locationID, eventID, gameIDs, dateString, timeString, slotID) => {
    //Navigates to Booking View
    navigate(`/location/${locationID}/event/${eventID}/game/${gameIDs}/datetime/${dateString}/${timeString}/${slotID}/booking`)
  }

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/location" element={<Location onLocationSelected={handleLocationSelected} />} />
          <Route path="/location/:locationID/event" element={<Events onEventSelected={handleEventSelected} />} />
          <Route path="/location/:locationID/event/:eventID/game" element={<Games onGameSelected={handleGameSelected} />} />
          <Route path="/location/:locationID/event/:eventID/game/:gameIDs/datetime" element={<CalendarTimes onDateTimeSelected={handleDateTimeSelected} />} />
          <Route path="/location/:locationID/event/:eventID/game/:gameIDs/datetime/:dateString/:timeString/:slotID/booking" element={<Booking />} />
          <Route path="/confirmed-booking" element={<Confirmation />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

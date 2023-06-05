import { useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { useParams } from "react-router-dom";
import truevrAPI from "./axios/truevrAPI";
import { updateDateTimeData, updateEventData, updateGamesData, updateLocationData } from "./redux/slices/booking";

const fetchSingleLocation = async (locationID) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await truevrAPI.get(`/center/${locationID}/`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const fetchSingleEvent = async (eventID) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await truevrAPI.get(`/event/${eventID}/`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const fetchSingleGame = async (gameID) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await truevrAPI.get(`/game/${gameID}/`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

const fetchAllSlots = async (locationID, dateString) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await truevrAPI.get(`/slot/${locationID}/${dateString}/`, config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}


const useGetMissing = () => {
  const { locationID, eventID, gameIDs, dateString, timeString, slotID } = useParams();

  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const checkParams = async () => {
      //Check location param
      const location = store.getState().booking.bookingData.location;
      const isLocationNullOrDifferentFromParam = (location === null) || (locationID !== String(location.center_id));
      if (locationID && isLocationNullOrDifferentFromParam) {
        const singleLocation = await fetchSingleLocation(locationID);
        dispatch(updateLocationData(singleLocation));
      }

      //Check event param
      const event = store.getState().booking.bookingData.event;
      const isEventNullOrDifferentFromParam = (event === null) || (eventID !== String(event.event_id));
      if (eventID && isEventNullOrDifferentFromParam) {
        const singleEvent = await fetchSingleEvent(eventID);
        dispatch(updateEventData(singleEvent));
      }

      //Check game(s) param
      const games = store.getState().booking.bookingData.games;
      const gameIDsList = gameIDs?.split('-');

      const shouldFetchGames = (() => {
        if (gameIDsList === undefined || gameIDsList.length === 0) {
          return false;
        }

        if (games === null) {
          return true;
        }

        const areGamesIdsDifferentFromParams = Object.keys(games).some((key) => {
          return !gameIDsList.includes(key);
        })

        if (areGamesIdsDifferentFromParams) {
          return true;
        }
      })();

      if (shouldFetchGames) {
        const firstGame = await fetchSingleGame(gameIDsList[0]);
        if (gameIDsList.length === 1) {
          dispatch(updateGamesData({
            [firstGame.game_id]: firstGame,
          }))
        } else {
          const secondGame = await fetchSingleGame(gameIDsList[1]);
          dispatch(updateGamesData({
            [firstGame.game_id]: firstGame,
            [secondGame.game_id]: secondGame,
          }))
        }
      }
      //Check datetime param
      const dateTime = store.getState().booking.bookingData.dateTime;

      const shouldFetchDateTime = (() => {
        if (!dateString || !timeString || !slotID) {
          return false;
        }

        if (dateString && timeString && slotID && dateTime === null) {
          return true;
        }

        if (dateTime.id !== slotID || dateTime.date !== dateString || dateTime.start_time !== timeString) {
          return true;
        }
      })();

      if (shouldFetchDateTime) {
        const allSlots = await fetchAllSlots(locationID, dateString);
        const singleSlot = allSlots.filter(slot => {
          return slot.slot_id === Number(slotID);
        })

        const end_time = singleSlot.end_time?.slice(11, 16);

        const dateTimeObj = {
          id: slotID,
          date: dateString,
          start_time: timeString,
          end_time: end_time,
        }
        dispatch(updateDateTimeData(dateTimeObj));
      }
    }
    checkParams();
  }, [locationID, eventID, gameIDs, dateString, timeString, slotID, dispatch, store])
}

export default useGetMissing;
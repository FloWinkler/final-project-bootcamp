import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GameCard from "./GameCard/GameCard";
import { ButtonWraper, GameCardsList, Main, ViewDescription } from "./GamesStyles";
import Button from '../../components/Button/Button';
import ViewTitle from '../../components/ViewTitle/ViewTitle';
import truevrAPI from '../../axios/truevrAPI';
import useGetMissing from "../../useGetMissing";
import { updateGamesData } from "../../redux/slices/booking";

const Games = ({ onGameSelected }) => {
  useGetMissing();

  const { locationID, eventID } = useParams();
  const dispatch = useDispatch();

  const [numGamesToSelect, setNumGamesToSelect] = useState(0);
  const [gamesIDsSelected, setGamesIDsSelected] = useState([]);
  const [description, setDescription] = useState();
  const [allGames, setAllGames] = useState([]);

  const isMaxNumSelected = gamesIDsSelected.length === numGamesToSelect;

  //--------------- Set the number of games to be selected based on type of event ---------------
  useEffect(() => {
    if (eventID === '1') {
      setNumGamesToSelect(1);
      setDescription('Select one game');
    } else if (eventID === '2') {
      setNumGamesToSelect(2);
      setDescription('Select two games');
    }
    //---------------- GET ALL GAMES FROM API------------------
    const getAllGames = async () => {
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const response = await truevrAPI.get('/game/', config);
        setAllGames(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllGames();
  }, []);

  const mapArrayToObj = (array) => {
    return array.reduce((acc, cur) => {
      return {
        ...acc,
        [cur['game_id']]: cur,
      }
    }, {});
  };

  //---------------- FUNCTION TO NAVIGATE TO CALENDAR ------------------
  const handleGameSelected = () => {
    const gamesToStore = allGames.filter((game) => {
      return gamesIDsSelected.includes(game.game_id);
    });
    dispatch(updateGamesData(mapArrayToObj(gamesToStore)));
    const gameIDs = `${gamesIDsSelected.join('-')}`;
    onGameSelected(locationID, eventID, gameIDs);
  }

  //--------------- GameCard Handle Click ---------------
  const handleGameClick = (gameID) => {
    if (!gamesIDsSelected.includes(gameID)) {
      setGamesIDsSelected([...gamesIDsSelected, gameID])
    } else {
      const games = gamesIDsSelected.filter(game => game !== gameID);
      setGamesIDsSelected(games)
    }
  }

  return (
    <Main>
      <ViewTitle title='Choose your game(s)' />
      <ViewDescription>{description}</ViewDescription>
      <GameCardsList>
        {
          allGames?.map((game) => {
            const isGameSelected = gamesIDsSelected.includes(game.game_id);
            const isGameDisabled = isMaxNumSelected && !isGameSelected;

            return <GameCard
              key={game.game_id}
              game={game}
              isGameSelected={isGameSelected}
              isDisabled={isGameDisabled}
              onGameClick={handleGameClick} />
          })
        }
      </GameCardsList>
      <div>
        {
          isMaxNumSelected ?
            <ButtonWraper>
              <Button text="Book now" onClick={handleGameSelected} />
            </ButtonWraper>
            :
            null
        }
      </div>
    </Main >
  );
}

export default Games;
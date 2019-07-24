import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../../globalStore/thunks/thunkCharacters";

const Characters = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const characters = useSelector(state => state.characters);

  return (
    <div>
      <h2>Personajes</h2>
      <ul>
        {characters &&
          characters.map(character => (
            <li key={character.name}>
              <Link
                to={`${match.url}/${character.url.slice(
                  character.url.indexOf("people") + "people".length + 1,
                  character.url.length - 1
                )}`}
              >
                {character.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Characters;

import React from "react";

import GameTile from "./GameTile";
import localise from "./localisationService";

const Lobby = ({ data }) => {
  return (
    <>
      <h2>List of Games</h2>
      <ul>
        {data.map((tile, i) => {
          return (
            <GameTile
              key={i}
              imageUrl={tile.imageUrl}
              link={tile.link}
              gameTitle={tile.gameTitle}
              localise={(...args) => localise(...args)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Lobby;

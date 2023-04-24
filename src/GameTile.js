import React from "react";

const GameTile = ({ gameTitle, link, imageUrl, localise, type }) => {
  const onClick = () => {
    window.location = link;
  };

  if (!gameTitle) {
    return <div>{localise("gameUnavailable")}</div>;
  }
  if (type === "slot") {
    return (
      <ul>
        <li>{gameTitle}</li>
      </ul>
    );
  }
  return (
    <li onClick={onClick} className="gameTile">
      <span>{localise(gameTitle)}</span>
    </li>
  );
};

export default GameTile;

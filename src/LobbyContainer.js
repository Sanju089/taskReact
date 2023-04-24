import React, { useState, useEffect } from "react";
import { fetch } from "./fetchMock";
import Lobby from "./Lobby";

export default function LobbyContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/lobby/game-tiles-data").then((response) => setData(response.data));
  }, []);

  return <Lobby data={data} />;
}

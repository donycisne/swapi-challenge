import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h2>Star Wars</h2>
      <ul>
        <li>
          <Link to="/peliculas">Peliculas</Link>
        </li>
        <li>
          <Link to="/personajes">Personajes</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;

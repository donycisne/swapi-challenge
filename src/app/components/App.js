import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "../globalStore/store/store";

import Home from "../components/Home/Home";
import Movies from "../components/Movies/Movies";
import Characters from "../components/Characters/Characters";
import DetailsMovie from "../components/Details/DetailsMovie";
import DetailsCharacter from "../components/Details/DetailsCharacter";
import DetailsPlanet from "../components/Details/DetailsPlanet";
import DetailsVehicle from "../components/Details/DetailsVehicle";
import DetailsStarship from "../components/Details/DetailsStarship";
import DetailsSpecie from "../components/Details/DetailsSpecie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={Movies} />
          <Route exact path="/personajes" component={Characters} />
          <Route exact path="/peliculas/:id" component={DetailsMovie} />
          <Route exact path="/personajes/:id" component={DetailsCharacter} />
          <Route exact path="/planetas/:id" component={DetailsPlanet} />
          <Route exact path="/naves/:id" component={DetailsStarship} />
          <Route exact path="/vehiculos/:id" component={DetailsVehicle} />
          <Route exact path="/especies/:id" component={DetailsSpecie} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

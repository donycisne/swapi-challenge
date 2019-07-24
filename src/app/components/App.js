import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import store from "../globalStore/store/store";

import Home from "./Layouts/Home/Home";
import Movies from "./Layouts/Movies/Movies";
import Characters from "./Layouts/Characters/Characters";
import DetailsMovie from "./Layouts/Details/DetailsMovie";
import DetailsCharacter from "./Layouts/Details/DetailsCharacter";
import DetailsPlanet from "./Layouts/Details/DetailsPlanet";
import DetailsVehicle from "./Layouts/Details/DetailsVehicle";
import DetailsStarship from "./Layouts/Details/DetailsStarship";
import DetailsSpecie from "./Layouts/Details/DetailsSpecie";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/peliculas" component={Movies} />
          <Route exact path="/personajes" component={Characters} />
          <Route exact path="/peliculas/:id" component={DetailsMovie} />
          <Route exact path="/personajes/:id" component={DetailsCharacter} />
          <Route exact path="/planetas/:id" component={DetailsPlanet} />
          <Route exact path="/naves/:id" component={DetailsStarship} />
          <Route exact path="/vehiculos/:id" component={DetailsVehicle} />
          <Route exact path="/especies/:id" component={DetailsSpecie} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import { originals, actions, horrors, comedy, trending } from "./urls";
import Banner from "./components/Banner/banner";
import Rowpost from "./components/Rowpost/Rowpost";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Rowpost type="tv" url={originals} title="Netflix Originals" />
      <Rowpost type="week" url={trending} title="Trending Movies" />

      <Rowpost type="movie" url={horrors} title="Horror Movies" isSmall />
      <Rowpost type="movie" url={comedy} title="Comedy Movies" isSmall />
      <Rowpost type="movie" url={actions} title="Action Movies" isSmall />
    </div>
  );
}

export default App;

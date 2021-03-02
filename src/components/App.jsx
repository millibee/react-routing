import React, { useState, useEffect } from "react";
import Films from "./Films";
import People from "./People";
import Home from "./Home";

const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [home, setHome] = useState([]);
  const [loadFilms, setLoadFilms] = useState(false);
  const [loadPeople, setLoadPeople] = useState(false);
  const [loadHome, setLoadHome] = useState(false);

  
  let handleLoadFilms = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => setFilms(res));
    setLoadPeople(false);
    setLoadHome(false);
    setLoadFilms(true);
  };
  let handleLoadPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((res) => setPeople(res));

    setLoadFilms(false);
    setLoadHome(false);
    setLoadPeople(true);
  };
  let handleLoadHome = () => {
    fetch("https://ghibliapi.herokuapp.com")
      .then((res) => res.json())
      .then((res) => setHome(res));

    setLoadFilms(false);
    setLoadPeople(false);
    setLoadHome(true);
  };
  if (loadFilms === false && loadPeople === false && loadHome === false) {
    return (
      <>
        <button onClick={() => handleLoadFilms()}>View Films</button>
        <button onClick={() => handleLoadPeople()}>View People</button>
        <button onClick={() => handleLoadHome()}>Go Home</button>
      </>
    );
  } else if (loadFilms === true) {
    return (
      <>
        <button onClick={() => handleLoadFilms()}>View Films</button>
        <button onClick={() => handleLoadPeople()}>View People</button>
        <button onClick={() => handleLoadHome()}>Go Home</button>
        {films.map((film) => (
          <Films film={film} />
        ))}
      </>
    );
  } else if (loadPeople === true) {
    return (
      <>
        <button onClick={() => handleLoadFilms()}>View films</button>
        <button onClick={() => handleLoadPeople()}>View People</button>
        <button onClick={() => handleLoadHome()}>Go Home</button>
        {people.map((person) => (
          <People person={person} />
        ))}
      </>
    );
  } else if (loadHome === true) {
    return (
      <>
        <button onClick={() => handleLoadFilms()}>View Films</button>
        <button onClick={() => handleLoadPeople()}>View People</button>
        <button onClick={() => handleLoadHome()}>Go Home</button>
        {home.map((house) => (
          <Home house={house} />
        ))}
      </>
    );
  }


};



export default App;

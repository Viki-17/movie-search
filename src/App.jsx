import { useState } from "react";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import MovieDetail from "./Components/MovieDetail";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/:id" element={<MovieDetail />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

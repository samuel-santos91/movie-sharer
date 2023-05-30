import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import BrowseMovie from "./components/BrowseMovie";
import AddMovie from "./components/AddMovie";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/add" element={<AddMovie />} />
        <Route path="/browse" element={<BrowseMovie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

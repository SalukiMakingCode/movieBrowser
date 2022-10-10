import React from "react";
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import Search from "./components/Search";
import Movie from "./components/Movie";
import Page404 from "./components/Page404";
import Profil from "./components/Profil";
import GenreList from "./components/GenreList";

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}> </Route>
            <Route path="search" element={<Search />}>
                <Route path=":genreId" element={<GenreList />} />
            </Route>
            <Route path="movie">
                <Route path=":idMovie" element={<Movie />} />
            </Route>
            <Route path="profil" element={<Profil />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
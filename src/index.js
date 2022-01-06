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

const rootElement = document.getElementById("root");
render (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}> </Route>
            <Route path="search" element={<Search />} />
            <Route path="movie" element={<Movie />}>
                    {/*<Route*/}
                    {/*    index*/}
                    {/*    element={*/}
                    {/*        <main style={{ padding: "1rem" }}>*/}
                    {/*            <p>Select an invoice</p>*/}
                    {/*        </main>*/}
                    {/*    }*/}
                    {/*/>*/}
                    {/*<Route path=":invoiceId" element={<Invoice />} />*/}
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
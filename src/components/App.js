import "../css/App.css";
//import {Link} from "react-router-dom";
import Menu from "./Menu";
import MovieSpotlight from "./MovieSpotlight";

function App() {


  return (
    <div>
        <h1><span>Movie</span>Browser</h1>
        <MovieSpotlight />
        <Menu />
        <h2>Trending</h2>
    </div>
  );
}

export default App;

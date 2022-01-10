import "../css/App.css";
import Menu from "./Menu";
import MovieSpotlight from "./MovieSpotlight";
import Trending from "./Trending";

function App() {
  return (
    <div>
        <h1><span>Movie</span>Browser</h1>
        <MovieSpotlight />
        <Menu />
        <h2>Trending</h2>
        <Trending />
    </div>
  );
}

export default App;

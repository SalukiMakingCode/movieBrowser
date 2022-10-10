import "../css/App.css";
import Menu from "./Menu";
import MovieSpotlight from "./MovieSpotlight";
import Trending from "./Trending";
import NavBar from "./NavBar";
import NowPlaying from "./NowPlaying";

function App() {
  return (
    <div>
        <NavBar />
        <MovieSpotlight />
        <Menu />
        <h2>Trending</h2>
        <Trending />
        <h2>Now on Theater</h2>
        <NowPlaying />
    </div>
  );
}

export default App;

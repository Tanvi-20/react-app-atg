import "./MyComponents/Icons";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './MyComponents/Header.js';
import Hero from './MyComponents/Hero.js';
import Menu from './MyComponents/Menu.js';
import Post from './MyComponents/Post.js';
import Location from './MyComponents/Location.js';

function App() {
  return (
      <>
      <Header/>
      <Hero/>
      <Menu/>
      <Post/>
      <Location/>
      </>
  );
}

export default App;

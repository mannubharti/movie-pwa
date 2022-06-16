import {BrowserRouter, Routes, Route,} from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import SimpleBottomNavigation from './Components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series';
import { Container } from "@mui/system";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="app">
      <Container>
        <Routes>
          <Route path='/' element={<Trending />} exact/>
          <Route path='/trending' element={<Trending />}/>
          <Route path='/movies' element={<Movies />}/>
          <Route path='/series' element={<Series />}/>
          <Route path='/search' element={<Search />}/>
        </Routes>
      </Container>
    <SimpleBottomNavigation/>
    </div>
    </BrowserRouter>
  );
}

export default App;

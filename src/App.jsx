import React from 'react'
import './App.css'
import { Header } from './component/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/homepage/Home';
import { SearchDetails } from './pages/searchDetail/SearchDetails';
import { useDispatch} from 'react-redux';
import { getApiConfiguration } from './store/homeSlice';
import axios from 'axios';
import { Footer } from './component/footer/Footer';
function App() {
  const dispatch = useDispatch();
  async function getApi() {
    const responce = await axios.get(`https://api.themoviedb.org/3/configuration?api_key=7375e5209b35a7926f88e480159467be`);
    const url = {
      backdrop: responce.data.images.secure_base_url + "original",
      poster: responce.data.images.secure_base_url + "original",
      profile: responce.data.images.secure_base_url + "original",
    };
    dispatch(getApiConfiguration(url));

  }
  getApi();


  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:query' element={<SearchDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App
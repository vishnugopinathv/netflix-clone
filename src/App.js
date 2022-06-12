import './App.css'
import Header from './Header';
import ShowDetails from './pages/ShowDetails';
import Moviepage from './pages/Moviepage';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import { ContentContextProvider } from './context/contentContext';
import Home from './pages/Home';
import Seriespage from './pages/Seriespage';
import Mylist from './pages/Mylist';
import Browse from './pages/Browse';
function App() {
  return (
    <ContentContextProvider>
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/:id' element={<ShowDetails />}/>
          <Route path='/movies' element={<Moviepage/>}/>
          <Route path='/TVShows' element={<Seriespage/>}/>
          <Route path='/Mylist' element={<Mylist/>}/>
          <Route path='/Browse' element={<Browse/>}/>
        </Routes>
        </BrowserRouter>
    </ContentContextProvider>
        
  );
}

export default App;

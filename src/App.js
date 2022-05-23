import './App.css';
import Banner from './Banner';
import Contentrow from './Contentrow';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Contentrow title="Adventure" genreid={12}  />
      <Contentrow title="War" genreid={10752}  />
      <Contentrow title="Animation" genreid={16} />
      <Contentrow title="Horror" genreid={27} />
      <Contentrow title="Romance" genreid={10749}/>
      <Contentrow title="Crime" genreid={80} key="Crime"/>
      <Contentrow title="Documentary" genreid={99}/>
      <Contentrow title="Drama" genreid={18} />
      <Contentrow title="History" genreid={36} />
    </div>
  );
}

export default App;

import './App.css';
import Fetchdata from './components/Fetchdata';
import Postdata from './components/Postdata';
function App() {
  return (
    <div className="App">
      <p>
        Fetch Posts
      </p>
      <Postdata/>
     <Fetchdata/>

    </div>
  );
}

export default App;
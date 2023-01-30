import Hot from './img/hot.jpg';
import Cold from './img/cold.jpg';
import Description from './compoonents/description'

function App() {
  return (
    <div className="app" style={{backgroundImage:`url(${Cold})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section_inputs">
            <input type="text" name="city" placeholder="Enter the City..."/>
            <button>°F</button>
          </div>
          <div className="section section_temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="" alt=""></img>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 C</h1>
            </div>
          </div>
          <Description/>
        </div>
      </div>
    </div>
  );
}

export default App;

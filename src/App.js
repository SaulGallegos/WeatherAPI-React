import {useState, useEffect} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';


function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });
  const [consult, saveConsult] = useState(false);
  const [result, setResult] = useState({});
  const [error, seterror] = useState(false);

  const {city, country} = search;

  useEffect(() => {
    const consultAPI = async () => {
      if(consult){
        const appId = 'eb6787989bcc8a2467768a07a84847f0';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;

        const answer = await fetch(url);
        const result = await answer.json();

        setResult(result);
        saveConsult(false);

        if(result.cod === "404"){
          seterror(true);
        }else{
          seterror(false);
        }
      }
    }
    consultAPI();
  }, [consult]);

  let component;
  if(error){
    component = <Error msj="There's no results available"/>
  }else{
    component = <Weather result={result}/>
  }

  return (
    <>
      <Header
        title={'Weather React App'}
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                saveSearch={saveSearch}
                saveConsult={saveConsult}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

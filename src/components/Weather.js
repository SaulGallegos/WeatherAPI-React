import PropTypes from 'prop-types';

const Weather = ({result}) => {
     
     const {name, main} = result;

     if(!name) return null;

     const kelvin = 273.15
     
     return (
          <div className="card-panel white col s12">
               <div className="black-text">
                    <h2>The weather in {name} is:</h2>
                    <p className="temperatura">
                         {parseFloat(main.temp-kelvin).toFixed(2)}<span>&#x2103;</span>
                    </p>
                    <p> Max: 
                         {parseFloat(main.temp_max-kelvin).toFixed(2)}<span>&#x2103;</span>
                    </p>
                    <p> Min: 
                         {parseFloat(main.temp_min-kelvin).toFixed(2)}<span>&#x2103;</span>
                    </p>
               </div>
          </div>
     );
}

Weather.propTypes = {
     result: PropTypes.object.isRequired
}
 
export default Weather;

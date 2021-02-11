import {useState} from 'react';
import Error from './Error';

import PropTypes from 'prop-types';

const Form = ({search, saveSearch, saveConsult}) => {

     const [error, seterror] = useState(false);

     const {city, country} = search;

     const handleChange = e =>{
          saveSearch({
               ...search,
               [e.target.name]: e.target.value
          });
     }

     const handleSubmit = e => {
          e.preventDefault();

          if(city.trim() === '' || country.trim() === ''){
               seterror(true);
               return;
          }
          seterror(false);

          saveConsult(true);
     }

     return (
          <form
               onSubmit={handleSubmit}
          >

               {
                    error ? 
                    <Error
                         msj='All Fields Required'
                    />
                    :
                    null
               }

               <div className="input-field col s12">
                    <input
                         type="text"
                         name="city"
                         id="city"
                         value={city}
                         onChange={handleChange}
                    />
                    <label htmlFor="city">City: </label>
               </div>

               <div className="input-field col s12">
                    <select
                         name="country"
                         id="country"
                         value={country}
                         onChange={handleChange}
                    >
                         <option value="">-- Select a Country --</option>
                         <option value="US">USA</option>
                         <option value="MX">Mexico</option>
                         <option value="AR">Argentina</option>
                         <option value="CO">Colombia</option>
                         <option value="CR">Costa Rica</option>
                         <option value="ES">Spain</option>
                         <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="country">Country: </label>
               </div>

               <div className="input-field col s12">
                <button
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
                >Search Weather</button>
               </div>
          </form>
     );
}

Form.propTypes = {
     search: PropTypes.object.isRequired,
     saveSearch: PropTypes.func.isRequired,
     saveConsult: PropTypes.func.isRequired
}
 
export default Form;
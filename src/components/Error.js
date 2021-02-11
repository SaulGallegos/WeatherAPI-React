import PropTypes from 'prop-types';


const Error = ({msj}) => {
     return (
          <p className="red darken-4 error">{msj}</p>
     );
}

Error.propTypes = {
     msj: PropTypes.string.isRequired
}
 
export default Error;


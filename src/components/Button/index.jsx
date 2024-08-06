import PropTypes from 'prop-types';

const Button = ({children, onClick}) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
};


export default Button;
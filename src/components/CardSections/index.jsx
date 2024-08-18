import PropTypes from 'prop-types';

const CardSections = ({title, description, otherProps, textColor, cardImage}) => {
  return (
    <div className="flex justify-center p-10 mr-4 rounded-md xs:flex xs:flex-col xs:p-1 xs:mt-7 xs:mr-0">
    <div className={`max-w-4xl rounded-md h-96 p-4 text-center items-center flex flex-col ${otherProps}`}>
      {!cardImage && (
        <h3 className={`mt-12 font-bold text-5xl tracking-wider max-w-xl xs:text-lg tablet:max-w-sm ${textColor}`}>{title}</h3>
      )}
        <p className="mt-7 font-semibold text-lg max-w-md tablet:text-sm xs:text-sm orange-dark-text">{description}</p>
      </div>
    </div>
);
}

CardSections.defaultProps = {
  otherProps: "beige-light",
  textColor: "beige-orange-text"
}

CardSections.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  otherProps: PropTypes.string,
  textColor: PropTypes.string,
  cardImage: PropTypes.bool
};

export default CardSections;
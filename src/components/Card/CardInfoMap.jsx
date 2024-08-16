import PropTypes from 'prop-types';

const CardInfoMap = ({className, title, info}) => {
  return (
    <div className={`flex flex-col text-center mt-8 p-5 justify-center beige-orange rounded-lg ${className}`}>
      <p className="text-white font-medium text-xl">{title}</p>
      {
        info.map((item) => (
          <>
          <p className="text-white pt-4 font-semibold">
            {item.title}
          </p>
          <p className="text-white">
            {item.description}
          </p>
          </>
        ))
      }
    </div>
);
}

CardInfoMap.propTypes = {
  className: PropTypes.string,
  info: PropTypes.node,
  title: PropTypes.string
};

export default CardInfoMap;
import PropTypes from 'prop-types';

const SectionTitle = ({title, manualDivider}) => {
    return (
      <>
      <h2 className="font-bold text-2xl lg:text-5xl tracking-widest beige-orange-text">
        {title}
      </h2>
      {!manualDivider && (
        <hr className="border-1 mt-3 border-orange lg:w-80 tablet:w-40 xs:w-40"/>
      )}
      </>
  )
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  manualDivider: PropTypes.bool
};

export default SectionTitle;
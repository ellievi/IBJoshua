import PropTypes from 'prop-types';

const SectionLayout = ({children, background}) => {
  return (
  <section className={`p-24 px-8 tablet:p-16 tablet:px-7 xs:p-12 xs:px-7 ${background}`}>
      {children}
    </section>
);
}

SectionLayout.defaultProps = {
  background: "light-gray"
}

SectionLayout.propTypes = {
  background: PropTypes.string
}

export default SectionLayout;
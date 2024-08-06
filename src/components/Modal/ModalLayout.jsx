import PropTypes from 'prop-types';

const ModalLayout = ({title, description, onBack}) => {
  return (
    <>
    <div className="beige-orange max-w-2xl min-w-80 modal overlay">
      <p onClick={onBack}>X</p>
      <div>
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <button onClick={onBack}>Voltar</button>
    </div>
    </>
);
}

ModalLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onBack: PropTypes.func
};

export default ModalLayout;
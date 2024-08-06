import ModalLayout from "./ModalLayout";
import PropTypes from 'prop-types';

const Modal = ({type, isOpen, onBack}) => {
  if(isOpen) {
    return (
      <>
        <ModalLayout 
          title="Rede De Mulheres Ester"
          description="A Rede de Mulheres Ester..."
          onBack={onBack}
        />
      </>
  );
  }
}

ModalLayout.propTypes = {
  isOpen: PropTypes.bool,
  onBack: PropTypes.func
};

export default Modal;
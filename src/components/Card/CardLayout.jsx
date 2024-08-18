import PropTypes from 'prop-types';
import Modal from '../Modal';
import {useState} from 'react';

const CardLayout = ({title, img, alt, imgClassName, modalType}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="p-10 mr-4 tablet:max-w-40 xs:flex xs:flex-col xs:p-1 xs:mt-7 xs:mr-0">
      <div className="w-80 h-80 tablet:w-40 tablet:h-40 beige-light">
        <img
          className={imgClassName}
          src={img}
          alt={alt}
        />
      </div>
      <div className="flex justify-end flex-row pt-1 tablet:pt-6 xs:justify-center">
        <p className="font-bold text-lg tablet:text-sm xs:text-sm orange-dark-text">{title}</p>
      </div>
      <div className="flex justify-end flex-row pt-2 xs:justify-center">
        <button onClick={() => setOpenModal(!openModal)} className="text-sm tablet:text-xs xs:text-xs font-bold text-white beige-orange-button">Conheça mais</button>
      </div>
      <Modal
        isOpen={openModal}
        onBack={() => setOpenModal(false)}
        open={() => setOpenModal(!openModal)}
        type={modalType}
        />
    </div>
);
}

CardLayout.propTypes = {
  title: PropTypes.string,
  img: PropTypes.node,
  alt: PropTypes.string,
  imgClassName: PropTypes.node,
  modalType: PropTypes.string
};

export default CardLayout;
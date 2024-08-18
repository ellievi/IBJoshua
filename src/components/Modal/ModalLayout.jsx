import PropTypes from 'prop-types';

const ModalLayout = ({open, title, description, onBack}) => {
  return (
    <>
    <div className={`fixed rounded inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/20" : "invisible"}`}>
      <div className="beige-orange flex flex-col p-10 rounded-lg text-white">
        <p onClick={onBack} className="cursor-pointer text-end">X</p>
        <div>
          <h3 className="text-2xl font-bold mt-5">{title}</h3>
          <p className="text-base mt-5">{description}</p>
        </div>
        <button onClick={onBack} className="self-center p-1 mt-5 max-w-32 bg-white beige-orange-text font-bold">Voltar</button>
      </div>
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
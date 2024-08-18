import React from "react";
import ModalLayout from "./ModalLayout";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Modal = ({type, isOpen, onBack, open}) => {

  const renderModal = React.useCallback(() => {
    switch(type) {
      case 'rededemulheresester': 
        return <ModalLayout
        title="Rede De Mulheres Ester"
        description={
          <>
          <p>
            A <span className="font-semibold">rede de mulheres Ester</span> reúne mulheres
            <br/>
            com o propósito de adoração e louvor a Deus.
          </p>
          <br/>
            <span className="font-semibold">
              "Mulher virtuosa quem a achará?
              <br/>
              O seu valor muito excede ao de rubis."
              <br/>
              (Provébios 31:10)
            </span>
          </>
        }
        onBack={onBack}
        open={open}
        type={type}
      />;
      case 'peniel': 
        return <ModalLayout 
        title="Peniel"
        description={
          <>
          <p>
            O ministério <span className="font-semibold">Peniel</span> reúne jovens para exercer a
            <br/>
            adoração, evangelho e louvor a Deus.
          </p>
          <br/>
            <span className="font-semibold">
              "Jovens, eu escrevi a vocês, porque são fortes, 
              <br/>
              e em vocês a Palavra de Deus permanece, 
              <br/>
              e vocês venceram o Maligno."
              <br/>
              (1 João 2:14 b)
            </span>
          </>
        }
        onBack={onBack}
        open={open}
        type={type}
      />
      case 'khronos': 
        return <ModalLayout 
        title="Khronos"
        description={
          <>
          <p>
            O ministério de coreografia <span className="font-semibold">Khronos</span> exerce o ministério
            <br/>
            de adoração a Deus através da ministração de coreografias.
          </p>
          <br/>
          <span className="font-semibold">"Mudaste meu pranto em dança" (Sl 30:11)</span>
          <br/>
          <Link to="https://www.instagram.com/ministeriokhronos/">
              <button className="mt-2 text-white underline">Acessar rede social</button>
          </Link>
          </>
        }
        onBack={onBack}
        open={open}
        type={type}
      />
      case 'sementesdeCristo': 
        return <ModalLayout 
        title="Sementes de Cristo"
        description={
          <>
          <p>
            O ministério infantil <span className="font-semibold">Sementes de Cristo</span> tem por missão 
            <br/>
            educar crianças na doutrina do evangelho de Jesus.
          </p>
          <br/>
          <span className="font-semibold">
            Ensina a criança no caminho em que deve andar, 
            <br/>
            e, ainda quando for velho, não se desviará dele."
            <br/>
            (Provérbios 22:6)
          </span>
          </>
        }
        onBack={onBack}
        open={open}
        type={type}
      />
      case 'somdeadoradores': 
        return <ModalLayout 
        title="Som de Adoradores"
        description={
          <>
          <p>
            O ministério <span className="font-semibold">Som de Adoradores</span>
            <br/>
            leva o amor de Cristo através do louvor.
          </p>
          <br/>
          <span className="font-semibold">
            "Tudo quanto tem fôlego louve ao SENHOR. 
            <br/>
            Louvai ao SENHOR!" (Salmos 150:6)
          </span>
          </>
        }
        onBack={onBack}
        open={open}
        type={type}
      />

      default: 
        return null;
      
    }
  }, [onBack, open, type]);

  if(isOpen) {
    return (
      <>
      {renderModal()}
      </>
  );
  }
}

ModalLayout.propTypes = {
  isOpen: PropTypes.bool,
  onBack: PropTypes.func,
  type: PropTypes.string,
  open: PropTypes.func
};

export default Modal;
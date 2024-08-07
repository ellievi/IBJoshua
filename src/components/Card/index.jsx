import CardLayout from './CardLayout';
import RedeDeMulheresEster from '../../assets/svg/RedeDeMulheresEster.svg';
import Peniel from '../../assets/svg/Peniel.svg';
import Khronos from '../../assets/svg/Khronos.svg';
import SementesDeCristo from '../../assets/svg/SementesDeCristo.svg';
import SomDeAdoradores from '../../assets/svg/SomDeAdoradores.svg';
import Modal from '../Modal';
import {useState} from 'react';

const Card = () => {
  const [openModal, setOpenModal] = useState(false);

    return (
      <>
      <div className="flex flex-row xs:flex xs:flex-col">
        <CardLayout
          img={RedeDeMulheresEster}
          imgClassName="py-8 tablet:py-4"
          title="Rede de Mulheres Ester"
          alt="Ilustração de uma mulher representando a rainha Ester."
          onClick={() => setOpenModal(!openModal)}
        />
        <Modal
        isOpen={openModal}
        onBack={() => setOpenModal(false)}
        type="rededemulheresester"
        />

        <CardLayout
          img={Peniel}
          imgClassName="py-14 tablet:py-7"
          title="Peniel"
          alt="Ilustração de um homem orando de joelhos com uma fonte escrito Peniel."
        />

        <CardLayout
          img={Khronos}
          imgClassName="ml-4 tablet:ml-2"
          title="Khronos"
          alt="Ilustração de uma bailarina com uma bíblia na mão e em cima de uma ampulheta. Há uma fonte escrito Ministério Khronos na superior esquerda e uma estampa floral na inferior direita."
        />
      </div>
      <div className="flex flex-row justify-center tablet:justify-normal xs:flex xs:flex-col">
        <CardLayout
          img={SementesDeCristo}
          imgClassName="py-20 tablet:py-9"
          title="Sementes De Cristo"
          alt="Ilustração de um peixe laranja lateralmente com um sorrido e três bolinhas à sua esquerda."
        />

        <CardLayout
          img={SomDeAdoradores}
          imgClassName="py-36 tablet:py-20"
          title="Som de Adoradores"
          alt="Ilustração de clave de sol laranja envolvida por representação de ondas sonoras verticais também laranjas."
        />
      </div>
      </>
  );
}

export default Card;
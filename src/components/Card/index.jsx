import CardLayout from './CardLayout';
import RedeDeMulheresEster from '../../assets/svg/RedeDeMulheresEster.svg';
import Peniel from '../../assets/svg/Peniel.svg';
import Khronos from '../../assets/svg/Khronos.svg';
import SementesDeCristo from '../../assets/svg/SementesDeCristo.svg';
import SomDeAdoradores from '../../assets/svg/SomDeAdoradores.svg';

const Card = () => {
    return (
      <>
      <div className="flex flex-row justify-center xs:grid xs:grid-cols-1 xs:justify-items-center">
        <CardLayout
          img={RedeDeMulheresEster}
          imgClassName="py-8 xs:py-4"
          title="Rede de Mulheres Ester"
          alt="Ilustração de uma mulher representando a rainha Ester."
          modalType="rededemulheresester"
        />

        <CardLayout
          img={Peniel}
          imgClassName="py-2"
          title="Peniel"
          alt="Ilustração de um homem orando de joelhos com uma fonte escrito Peniel."
          modalType="peniel"
        />

        <CardLayout
          img={Khronos}
          imgClassName="ml-4 xs:ml-1"
          title="Khronos"
          alt="Ilustração de uma bailarina com uma bíblia na mão e em cima de uma ampulheta. Há uma fonte escrito Ministério Khronos na superior esquerda e uma estampa floral na inferior direita."
          modalType="khronos"
        />
      </div>
      <div className="flex flex-row justify-center xs:grid xs:grid-cols-1 xs:justify-items-center">
        <CardLayout
          img={SementesDeCristo}
          imgClassName="py-6 xs:py-3"
          title="Sementes De Cristo"
          alt="Ilustração de um peixe laranja lateralmente com um sorrido e três bolinhas à sua esquerda."
          modalType="sementesdeCristo"
        />

        <CardLayout
          img={SomDeAdoradores}
          imgClassName="py-20 xs:py-10"
          title="Som de Adoradores"
          alt="Ilustração de clave de sol laranja envolvida por representação de ondas sonoras verticais também laranjas."
          modalType="somdeadoradores"
        />
      </div>
      </>
  );
}

export default Card;
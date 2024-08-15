import SectionLayout from '../SectionLayout';
import SectionTitle from '../SectionTitle';
import CardSections from '../../CardSections';
import IbjoshuaInsta from '../../../assets/img/IbjoshuaInsta.jpeg';
import { Link } from 'react-router-dom';

const SectionVerseAndSocial = () => {
  return (
    <>
    <SectionLayout
      background="bg-img"
    >
      <div>
        <SectionTitle
          title="Versículo do Dia"
        />
        <SectionTitle
          title="Rede Social"
          className="flex justify-end"
        />
      </div>
      
      <div className="flex flex-row justify-around xs:flex-col">
        <CardSections
          textColor="text-white"
          otherProps="beige-orange"
          description={
            <>
              <iframe 
                title="VersiculoDoDia"
                width="100%" 
                height="600px" 
                frameborder="0"
                className="tablet:mt-7"
                src="https://www.bibliatodo.com/pt/online/versiculo-del-dia"
              />
            </>
          }
        />
        <CardSections
          textColor="text-white"
          cardImage
          description={
            <>
            <Link to="https://www.instagram.com/ibjoshuaoficial">
            <img
              src={IbjoshuaInsta}
              alt="Captura de tela mobile do instagram da Igreja Batista Joshua"
              className="w-96 h-5/6 opacity-85 hover:opacity-100 xs:mt-12"
            />
              <button className="mt-2 beige-orange-text underline">Acessar</button>
            </Link>
            </>
          }
        />
      </div>
    </SectionLayout>
  </>
);
}

export default SectionVerseAndSocial;
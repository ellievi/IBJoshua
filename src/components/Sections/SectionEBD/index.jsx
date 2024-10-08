import { Link } from 'react-router-dom';
import CardSections from '../../CardSections';
import SectionLayout from '../SectionLayout';
import SectionTitle from '../SectionTitle';

const SectionEBD = () => {
  return (
    <SectionLayout 
      background="bg-img"
    >
      <SectionTitle
        title="EBD Online"
      />
      <CardSections
        title="Escola Bíblica Dominical Online"
        description={
        <p>
        Todos os domingos, às 9:30 da manhã, através do aplicativo Meet, ocorre a Escola Bíblica Dominical Online.
        <br />
        A EBD é um momento em que é efetuado um estudo da bíblia, onde é feito a leitura de forma didática. Há também a oportunidade de
        efetuar perguntas à cerca do tema em estudo.
        <br />
        Para obter o aplicativo de videoconferência utilizado para a realização do estudo de forma online, pode-se o instalar através
        da Play Store (sistemas Android), App Store (sistemas IOS) ou qualquer navegador (sistemas de Desktop).
        <br/>
        <Link to="https://play.google.com/store/apps/details?id=com.google.android.apps.tachyon&hl=pt_BR&pli=1">
          <button className="mt-2 text-sm beige-orange-text underline">Acessar página de download na Play Store</button>
        </Link>
        <Link to="https://apps.apple.com/br/app/google-meet/id1096918571">
          <button className="mt-2 text-sm beige-orange-text underline">Acessar página de download na App Store</button>
        </Link>
        </p>
        }
        textColor="beige-orange-text-shadow drop-shadow-lg"
      />
    </SectionLayout>
);
}

export default SectionEBD;
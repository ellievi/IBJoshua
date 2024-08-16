import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';
import CardSections from '../../components/CardSections';
import {Link} from 'react-router-dom';

const Locations = () => {
  return (
    <>
      <SectionLayout
        background="bg-img"
      >
      <SectionTitle
        title={
          <p className="flex justify-center">
            Localizações
          </p>
        }
        manualDivider
      />
      <div className="grid grid-cols-2 xs:grid-cols-1">
        <CardSections
          title="Sede"
          description={
            <>
            <p>Av. Um, n° 100, Curado IV, Jaboatão dos Guararapes</p>
            <Link to="https://www.instagram.com/ibjoshuaoficial">
              <button className="mt-2 beige-orange-text underline">Acessar</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Congregação Joshua"
          description={
            <>
            <p>Rua José do Patrocínio, N°37, Curado IV</p>
            <Link to="https://www.instagram.com/cg.joshua2019">
              <button className="mt-2 beige-orange-text underline">Acessar</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Curado III"
          description={
            <>
            <Link to="https://www.instagram.com/bjoshua_2019">
              <button className="mt-2 beige-orange-text underline">Acessar</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Torrões"
          description={
            <>
            <p>Rua Pintor Helio Feijo 45, Torrões</p>
            <Link to="https://www.instagram.com/ibjtorroes">
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

export default Locations;
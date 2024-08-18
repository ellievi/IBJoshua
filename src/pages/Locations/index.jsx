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
            <p>Av. Um, 100, Curado IV, Jaboatão dos Guararapes</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.313197717804!2d-34.99836059058877!3d-8.069502791924831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c8057449a17%3A0x890d8b93c835da88!2sAv.%20Um%2C%20N%C2%B0%20100%20-%20Curado%20IV%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054270-030!5e0!3m2!1sen!2sbr!4v1723938264254!5m2!1sen!2sbr" 
            title="LocalSede"
            className="width-map xs:w-72"
            height="350" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            />
            <Link to="https://www.instagram.com/ibjoshuaoficial">
              <button className="mt-2 beige-orange-text underline">Acessar rede social</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Congregação"
          description={
            <>
            <p>Rua José do Patrocínio, 37, Curado IV, Jaboatão dos Guararapes</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2549641451656!2d-34.997536090588625!3d-8.075457991919036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c88286b18c5%3A0x581c44ad76cf6d7e!2sR.%20Jos%C3%A9%20do%20Patroc%C3%ADnio%2C%2037%20-%20Curado%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE!5e0!3m2!1sen!2sbr!4v1723939094932!5m2!1sen!2sbr" 
            title="LocalSede"
            className="width-map xs:w-72"
            height="350" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            />
            <Link to="https://www.instagram.com/cg.joshua2019">
              <button className="mt-2 beige-orange-text underline">Acessar rede social</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Curado III"
          description={
            <>
            <p>Rua Luar do Sertão, 320, Curado IV, Jaboatão dos Guararapes</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.22328396999944!2d-35.00916331794157!3d-8.071684469868341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c9a6509da75%3A0x506c1ec1b63ebde6!2sR.%20Luar%20do%20Sert%C3%A3o%2C%20320%20-%20Curado%20IV%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054368!5e0!3m2!1sen!2sbr!4v1723939628810!5m2!1sen!2sbr"
            title="LocalSede"
            className="width-map xs:w-72"
            height="350" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            />
            <Link to="https://www.instagram.com/bjoshua_2019">
              <button className="mt-2 beige-orange-text underline">Acessar rede social</button>
            </Link>
            </>
          }
        />
        <CardSections
          title="Torrões"
          description={
            <>
            <p>Rua Pintor Helio Feijo, 45, Torrões, Recife</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.410124341139!2d-34.939829990588976!3d-8.059580991934517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab194574fe3a05%3A0x48f71a9036162093!2sR.%20Pintor%20H%C3%A9lio%20Feij%C3%B3%2C%2045%20-%20Torr%C3%B5es%2C%20Recife%20-%20PE%2C%2050660-330!5e0!3m2!1sen!2sbr!4v1723939238403!5m2!1sen!2sbr"
            title="LocalSede"
            className="width-map xs:w-72"
            height="350" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            />
            <Link to="https://www.instagram.com/ibjtorroes">
              <button className="mt-2 beige-orange-text underline">Acessar rede social</button>
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
import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';
import Igreja from '../../assets/img/Igreja.jpg'

const About = () => {
    return (
      <>
      <div>
      <SectionLayout
        background="bg-img"
      >
      <SectionTitle
        title={
          <p>
            Sobre a
            <br/> 
            IBJOSHUA
          </p>
        }
      />
      <div className="flex flex-row mt-5 xs:flex-col"
      >
        <img 
          src={Igreja}
          className="w-96 rounded-full shadow-white shadow-2xl xs:max-w-35"
          alt="Foto do pastor presidente da Igreja Batista Joshua"
        />
        <p className="justify-start max-w-96 pt-10 pl-12">
          A <span className="beige-orange-text font-semibold">Igreja Batista Joshua</span> foi fundada com a missão
          de compartilhar o evangelho e avançar na obra a qual Jesus ordenou para todos os que nEle crê 
          através da pregação da palavra, escola bíblica dominical e ministérios.
        </p>
      </div>
    </SectionLayout>
      </div>
      </>
    );
}

export default About;
import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';

const About = () => {
    return (
      <>
      <div>
      <SectionLayout>
      <SectionTitle
        title={
          <p>
            Sobre a
            <br/> 
            IBJOSHUA
          </p>
        }
      />
      <div className="flex flex-row">
        <p className="justify-start max-w-96 pt-10 pl-12">
          A Igreja Batista Joshua foi fundada em 2014 com a missão de.
        </p>
      </div>
    </SectionLayout>
      </div>
      </>
    );
}

export default About;
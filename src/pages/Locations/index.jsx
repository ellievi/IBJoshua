import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';

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
      </SectionLayout>
    </>
  );
}

export default Locations;
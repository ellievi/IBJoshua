import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';

const Contribute = () => {
  return (
    <>
      <div>
        <SectionLayout>
        <SectionTitle
          title={
            <p>
              Contribua com a obra
            </p>
          }
        />
        <div className="flex flex-row">
          <p className="justify-start max-w-96 pt-10 pl-12">
            Igreja Batista Joshua
          </p>
        </div>
        </SectionLayout>
      </div>
    </>
  );
}

export default Contribute;
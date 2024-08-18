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
              Contribua
            </p>
          }
        />
        <div className="flex flex-row">
          <p className="justify-start pt-10 pl-12">
            Se você quer contribuir financeiramente com a Igreja Batista Joshua:
            <br/>
            <span className="font-semibold">
              Chave: (81) 99674-8834
              <br/>
              Banco C6 S.A.
            </span>
          </p>
        </div>
        </SectionLayout>
      </div>
    </>
  );
}

export default Contribute;
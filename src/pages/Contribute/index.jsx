import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';
import Orando from '../../assets/img/Orando.png';

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
        <div className="flex flex-col pt-10 pl-5">
          <p className="justify-start">
            Se você quer contribuir financeiramente com a Igreja Batista Joshua:
            <br/>
            <span className="font-semibold">
              Chave: (81) 99674-8834
              <br/>
              Banco C6 S.A.
            </span>
          </p>
          <p className="mt-10">Você também pode contribuar em <span className="font-semibold">oração!</span></p>
          <img
            src={Orando}
            className="mt-10 shadow-white shadow-lg max-w-96"
            alt="Ilustração de um homem orando. Ele está vestindo uma camisa laranja."
          />
        </div>
        </SectionLayout>
      </div>
    </>
  );
}

export default Contribute;
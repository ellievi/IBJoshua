import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';

const Schedule = () => {
  const schedule = [
    {
      title: "Terça",
      description: "7:30h | Culto de Consagração"
    }, 
    {
      title: "Quarta",
      description: "19h | Culto de Círculo de Oração"
    }, 
    {
      title: "Sexta",
      description: "19:30h | Aviva Joshua"
    }, 
    {
      title: "Domingo",
      description: "18h | Culto da Família"
    }
  ]
  return (
    <>
    <div className="flex justify-center light-gray">
      <SectionLayout>
      <SectionTitle
        title={
          <p className="flex justify-center">
            Agenda da semana
          </p>
        }
        manualDivider
      />
      <div className="flex flex-col text-center mt-8 p-5 justify-center max-w-4xl beige-orange rounded-lg">
        {
          schedule.map((item) => (
            <>
            <p className="text-white pt-4 font-semibold">
              {item.title}
            </p>
            <p className="text-white">
              {item.description}
            </p>
            </>
          ))
        }
      </div>
      </SectionLayout>
    </div>
    </>
  );
}

export default Schedule;
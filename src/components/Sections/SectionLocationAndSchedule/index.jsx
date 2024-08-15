import SectionLayout from '../SectionLayout';
import SectionTitle from '../SectionTitle';
import CardSections from '../../CardSections';

const SectionLocationAndSchedule = () => {
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
    <SectionLayout>
      <SectionTitle
        title="Local Sede e Horários"
      />
      <div className="flex flex-row justify-center">
        <CardSections
          title="Local Sede"
          description="Av. Um, n° 100, Curado IV, Jaboatão dos Guararapes"
        />
        <CardSections
          title="Horários da semana"
          description={
            schedule.map((item) => (
              <>
              <p className="text-white pt-4">
                {item.title}
              </p>
              <p className="text-white">
                {item.description}
              </p>
              </>
            ))
          }
          otherProps="beige-orange"
          textColor="text-white"
        />
      </div>
    </SectionLayout>
);
}

export default SectionLocationAndSchedule;
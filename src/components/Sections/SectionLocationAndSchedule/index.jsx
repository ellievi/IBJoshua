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
      <div className="flex flex-row justify-center xs:flex-col">
        <CardSections
          title="Local Sede"
          description={
            <>
            <p>Av. Um, n° 100, Curado IV, Jaboatão dos Guararapes</p>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.313197717804!2d-34.99836059058877!3d-8.069502791924831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1c8057449a17%3A0x890d8b93c835da88!2sAv.%20Um%2C%20N%C2%B0%20100%20-%20Curado%20IV%2C%20Jaboat%C3%A3o%20dos%20Guararapes%20-%20PE%2C%2054270-030!5e0!3m2!1sen!2sbr!4v1723938264254!5m2!1sen!2sbr" 
            title="LocalSede"
            className="width-map xs:w-72"
            height="350" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            />
            </>
          }
        
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
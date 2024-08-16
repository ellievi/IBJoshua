import CardInfoMap from '../../components/Card/CardInfoMap';
import SectionLayout from '../../components/Sections/SectionLayout';
import SectionTitle from '../../components/Sections/SectionTitle';

const Schedule = () => {
  const scheduleSede = [
    {
      title: "Domingo",
      description: "18h | Culto da família"
    },
    {
      title: "Terça-feira",
      description: "7:30h | Consagração"
    }, 
    {
      title: "Quarta-feira",
      description: "19h | Círculo de oração"
    }, 
    {
      title: "Sexta-feira",
      description: "19:30h | Aviva Joshua"
    },
  ]
  const scheduleCongrecacao = [
    {
      title: "Domingo",
      description: "18h | Culto da família"
    },
    {
      title: "Segunda-feira",
      description: "8h | Consagração"
    }, 
    {
      title: "Quarta-feira",
      description: "14h | Círculo de oração"
    }
  ]
  const scheduleCuradoIII = [
    {
      title: "Domingo",
      description: "18h | Culto da família"
    },
    {
      title: "Terça-feira",
      description: "13:30h | Culto da doutrina"
    }, 
    {
      title: "Quinta-feira",
      description: "19h | Círculo de oração"
    }
  ]
  const scheduleTorroes = [
    {
      title: "Domingo",
      description: "18h | Culto da família"
    },
    {
      title: "Terça-feira",
      description: "19h | Culto de oração"
    }, 
    {
      title: "Quinta-feira",
      description: "19h | Culto da vitória"
    }
  ]

  return (
    <>
    <div className="flex justify-center light-gray">
      <SectionLayout
        background="w-full"
      >
      <SectionTitle
        title={
          <p className="flex justify-center">
            Agenda da semana
          </p>
        }
        manualDivider
      />
      <div className="grid grid-cols-2 w-full xs:grid-cols-1">
        <CardInfoMap
          title="Sede"
          info={scheduleSede}
          className="mr-10 xs:mr-0"
        />
        <CardInfoMap
          title="Congregação"
          info={scheduleCongrecacao}
        />
        <CardInfoMap
          title="Curado III"
          info={scheduleCuradoIII}
          className="mr-10 xs:mr-0"
        />
        <CardInfoMap
          title="Torrões"
          info={scheduleTorroes}
        />
      </div>
      </SectionLayout>
    </div>
    </>
  );
}

export default Schedule;
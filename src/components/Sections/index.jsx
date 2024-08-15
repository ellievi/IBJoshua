import SectionEBD from "./SectionEBD";
import SectionMinistries from "./SectionMinistries";
import SectionLocationAndSchedule from "./SectionLocationAndSchedule";
import SectionVerseAndSocial from "./SectionVerseAndSocial";

const Sections = () => {
    return (
      <>
      <SectionMinistries />
      <SectionEBD />
      <SectionLocationAndSchedule />
      <SectionVerseAndSocial />
      </>
  )
}

export default Sections;
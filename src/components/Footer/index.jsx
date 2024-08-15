import IbjoshuaLogo from "../../assets/svg/ibjoshualogo.svg"
import MenuItem from "../Menu/menuItem";

const Footer = () => {
  return (
    <div className="flex beige-orange w-full h-40 text-white lg:justify-center">
      <img
        src={IbjoshuaLogo}
        alt="Logo da Igreja Batista Joshua. A imagem contém uma ilustração de um peixe branco 
				e ao lado contém o título da Igreja Batista Joshua, também em branco"
        className="pl-8 xs:pl-4 max-w-64 tablet:max-w-32"
      />
      <div className="flex flex-col justify-center p-10 xs:p-4">
        <MenuItem isLateralMenu/>
      </div>
        <p className="flex items-center text-white pl-20 xs:pl-0 xs:text-xs">© 2024 Igreja Batista Joshua. Todos os direitos reservados.</p>
    </div>
);
}

export default Footer;
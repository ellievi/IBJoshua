import {Link} from "react-router-dom";

const MenuItem = ({isLateralMenu, onClick}) => {
  const menuItemsData = [
    {label: 'Sobre', link: "/Sobre"},
    {label: 'Agenda', link: "/Agenda"},
    {label: 'Localizações', link: "/Localizacoes"},
    {label: 'Contribua', link: "/Contribua"}
  ];
  
  return (
    <ul className={!isLateralMenu ? "flex flex-row gap-10" : "flex flex-col items-center justify-center"}>
      {menuItemsData.map((item) => {
        return (
          <Link to={item.link}>
            <li onClick={onClick} className="hover:cursor-pointer beige-orange-hover beige-orange-active">{item.label}</li>
          </Link>
        );
      })}
    </ul>
  );
}

export default MenuItem;
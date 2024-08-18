import { Link } from 'react-router-dom';
import IbjoshuaBanner from '../../assets/img/IbjoshuaBanner.png'

const Banner = () => {
  return (
    <div id="banner-div" className="z-30 text-white text-center">
      <img
      src={IbjoshuaBanner}
      className="max-w-full"
      alt="Foto da Igreja Batista Joshua com a visão direcionada para o púlpito contendo o nome de Jesus"
      />
      <h1 className="font-bold text-7xl xs:text-xl hover-title">BEM-VINDO</h1>
      <p className="font-medium text-2xl mt-2 xs:text-xs tracking-tight">HÁ UM LUGAR AQUI PARA VOCÊ</p>
      <Link to="/Sobre">
      <button className="text-lg xs:text-xs beige-orange-button">Conheça mais</button>
      </Link>
    </div>
  );
}

export default Banner;
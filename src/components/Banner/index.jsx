import IbjoshuaBanner from '../../assets/img/IbjoshuaBanner.png'

const Banner = () => {
  return (
    <div id="banner-div" className="z-30 text-white text-center">
      <img
      src={IbjoshuaBanner}
      className="max-w-full"
      alt="Foto da Igreja Batista Joshua com a visão direcionada para o púlpito contendo o nome de Jesus"
      />
      <h1 className="font-bold text-2xl lg:text-7xl">BEM-VINDO</h1>
      <p className="font-bold text-xs lg:text-2xl tracking-tight">HÁ UM LUGAR AQUI PARA VOCÊ</p>
      <button className="lg:text-lg beige-orange-button">Conheça mais</button>
    </div>
  );
}

export default Banner;
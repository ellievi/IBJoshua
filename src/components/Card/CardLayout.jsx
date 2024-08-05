const CardLayout = ({title, img, alt, onClick, imgClassName}) => {
  return (
    // xs:w-32 xs:h-32 xs:py-3
    <div className="p-10 mr-4">
      <div className="w-80 h-80 beige-light">
        <img
          className={imgClassName}
          src={img}
          alt={alt}
        />
      </div>
      <div className="flex justify-end flex-row pt-1">
        <p className="font-bold text-lg orange-dark-text">{title}</p>
      </div>
      <div className="flex justify-end flex-row pt-2">
        <button onClick={onClick} className="text-sm font-bold text-white beige-orange-button">Conheça mais</button>
      </div>
    </div>
);
}

export default CardLayout;
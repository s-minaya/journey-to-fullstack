import BlueSlime from "../../images/blue-slime.gif"
function SlimeLoader() {
  return (
    <div className="slime-loader">
      <div className="slime-loader__slimes">
        <img className="slime-loader__img" src={BlueSlime} alt="Slime cargando 1" />
        <img className="slime-loader__img" src={BlueSlime} alt="Slime cargando 2" />
        <img className="slime-loader__img" src={BlueSlime} alt="Slime cargando 3" />
      </div>

      <p className="slime-loader__text">
        CARGANDO MUNDO<span className="slime-loader__dots">...</span>
      </p>
    </div>
  );
}

export default SlimeLoader;
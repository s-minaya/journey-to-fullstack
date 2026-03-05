import Header from "../Layout/Header";
import SlimeCompanion from "../Slime/SlimeCompanion";
import AboutContent from "../About/AboutContent";
import "../../styles/Pages/AboutMe.scss";

const SLIME_TEXTS = [
  "¡Bienvenido a mi guarida! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
  "Soy Sofía, desarrolladora web.",
  "¡Haz clic en el vinilo para escuchar mi playlist! ♫",
  "¡No dudes en escribirme si tienes alguna pregunta! ♡",
];

function AboutMe() {
  return (
    <div className="about-me">
      <Header visible={true} />

      <main className="about-me__content">
        <header className="about-me__header">
          <h1 className="about-me__title">SOBRE MÍ</h1>
          <p className="about-me__subtitle">
            Desarrolladora web en busca de aventuras ᕦ(ò_óˇ)ᕤ
          </p>
        </header>

        <AboutContent />
      </main>

      <div className="about-me__slime">
        <SlimeCompanion texts={SLIME_TEXTS} visible={true} />
      </div>
    </div>
  );
}

export default AboutMe;
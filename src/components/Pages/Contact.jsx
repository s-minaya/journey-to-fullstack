import Header from "../Layout/Header";
import SlimeCompanion from "../Slime/SlimeCompanion";
import ContactLinks from "../Contact/ContactLinks";
import "../../styles/Pages/Contact.scss";

const SLIME_TEXTS = [
  "¡Bienvenido a la Taberna! (^◇^；)",
  "Aquí puedes encontrar mis redes sociales.",
  "¡La primera ronda va por mi cuenta! ✌.ʕʘ‿ʘʔ.✌",
  "No dudes en escribirme, siempre respondo.",
];

function Contact() {
  return (
    <div className="contact-page">
      <Header visible={true} />

      <section className="contact-page__content">
        <header className="contact-page__header">
          <h1 className="contact-page__title">CONTACTO</h1>
          <p className="contact-page__subtitle">
            ¿Hablamos? Siempre hay sitio en la barra ( ˘ ³˘)♥
          </p>
        </header>

        <ContactLinks />
      </section>

      <div className="contact-page__slime">
        <SlimeCompanion texts={SLIME_TEXTS} visible={true} />
      </div>
    </div>
  );
}

export default Contact;
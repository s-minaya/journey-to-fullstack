import SlimeLoader from "../Slime/SlimeLoader";
import SlimeCompanion from "../Slime/SlimeCompanion";
import { usePageIntro } from "../hooks/usePageIntro";

const MAP_SLIME_TEXTS = [
  "Este es el mapa del mundo 🌍",
  "Desde aquí puedes viajar.",
  "Elige tu destino."
];

function MapPage() {
  const {
    loading,
    backgroundVisible,
    contentVisible,
  } = usePageIntro();

  if (loading) return <SlimeLoader />;

  return (
    <section className={`hero ${backgroundVisible ? "hero--visible" : ""}`}>
      <div className={`hero__content ${contentVisible ? "hero__content--visible" : ""}`}>
        <p style={{ color: "white", fontSize: "2rem" }}>MAP PAGE</p>

        <SlimeCompanion
          texts={MAP_SLIME_TEXTS}
          visible={contentVisible}
        />
      </div>
    </section>
  );
}

export default MapPage;
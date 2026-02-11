import { Link } from "react-router";
import Header from "../Layout/Header";
import SlimeLoader from "../Slime/SlimeLoader";
import SlimeCompanion from "../Slime/SlimeCompanion";

function LandingPage({ loading, backgroundVisible, contentVisible, slimeTexts }) {
  if (loading) {
    return <SlimeLoader />;
  }

  return (
    <section className={`hero ${backgroundVisible ? "hero--visible" : ""}`}>
      <Header visible={contentVisible} animated={true} />
      <div className={`hero__content ${contentVisible ? "hero__content--visible" : ""}`}>
        <Link to="/map" className="hero__button">
          COMENZAR AVENTURA
        </Link>
        <SlimeCompanion texts={slimeTexts} visible={contentVisible} />
      </div>
    </section>
  );
}

export default LandingPage;
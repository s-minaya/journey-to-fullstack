/* eslint-disable no-unused-vars */
import {
  FaGamepad,
  FaDrum,
  FaGlobeAsia,
  FaPalette,
  FaBook,
  FaUtensils,
  FaFlag,
  FaLanguage,
  FaHotel,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";
import portrait from "../../images/portrait.gif";
import "../../styles/About/AboutContent.scss";

// ==========================
// DATOS
// ==========================

const INTERESTS = [
  { Icon: FaGamepad, title: "GAMER", desc: "MMORPGs, shooters y cozy games" },
  { Icon: FaDrum, title: "MÚSICA", desc: "Jazzhop, metal y batería" },
  { Icon: FaGlobeAsia, title: "JAPAN LOVER", desc: "Sueño con visitarlo algún día" },
  { Icon: FaPalette, title: "ARTISTA", desc: "Arte tradicional y digital" },
  { Icon: FaBook, title: "APRENDIENDO", desc: "Siempre iterando en mí misma" },
  { Icon: FaUtensils, title: "COCINA", desc: "Fusión asiática y española" },
];

const STATS = [
  { label: "STR · RESILIENCIA", value: 95 },
  { label: "INT · CAPACIDAD DE APRENDIZAJE", value: 92 },
  { label: "WIS · RESOLUCIÓN", value: 88 },
  { label: "DEX · CÓDIGO LIMPIO", value: 84 },
  { label: "CHA · COMUNICACIÓN", value: 82 },
];

// ==========================
// COMPONENTE
// ==========================

function AboutContent() {
  return (
    <div className="about-content">

      {/* ── PORTRAIT ── */}
      <div className="about-content__card about-content__card--portrait">
        <h2 className="about-content__card-title">SOFÍA MINAYA</h2>
        <div className="about-content__portrait-body">
          <img
            src={portrait}
            alt="Retrato pixel art de Sofía"
            className="about-content__portrait-img"
          />
          <div className="about-content__badge"><FaBriefcase /> BUSCANDO EMPLEO</div>
          <ul className="about-content__personal-list">
            <li className="about-content__personal-item">
              <span className="about-content__personal-icon"><FaFlag /></span>
              <span>España</span>
            </li>
            <li className="about-content__personal-item">
              <span className="about-content__personal-icon"><FaLanguage /></span>
              <span>
                Español · English
                <br />
                <span className="about-content__personal-sub">日本語 (学習中)</span>
              </span>
            </li>
            <li className="about-content__personal-item">
              <span className="about-content__personal-icon"><FaHotel /></span>
              <span>
                Vengo de la hostelería
                <br />
                <span className="about-content__personal-sub">
                  gestión, equipos, atención al cliente
                </span>
              </span>
            </li>
            <li className="about-content__personal-item">
              <span className="about-content__personal-icon"><FaStar /></span>
              <span>Abierta a oportunidades laborales</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── BIO ── */}
      <div className="about-content__card about-content__card--bio">
        <h2 className="about-content__card-title">SOBRE MÍ</h2>
        <p className="about-content__bio-text">
          Tras una etapa profesional en la hostelería, di el salto al
          desarrollo web — un campo que despertó mi verdadera pasión y en el
          que estoy motivada a seguir creciendo. Analítica, organizada,
          resiliente y siempre buscando el próximo reto creativo.
        </p>
      </div>

      {/* ── VINYL ── */}
      <div className="about-content__card about-content__card--vinyl">
        <h3 className="about-content__card-title">MY VIBES</h3>
        <a
          href="https://open.spotify.com/playlist/7DwFC1PeTjsiTofr4BPLi4"
          target="_blank"
          rel="noopener noreferrer"
          className="about-content__vinyl-link"
          aria-label="Abrir playlist de Spotify para programar"
        >
          <div className="about-content__vinyl-disc">
            <div className="about-content__vinyl-label">
              <span className="about-content__vinyl-label-top">CODE</span>
              <span className="about-content__vinyl-label-icon">♫</span>
              <span className="about-content__vinyl-label-bottom">PLAYLIST</span>
            </div>
          </div>
        </a>
        <p className="about-content__vinyl-caption">
          Mi playlist para programar — ¡haz clic!
        </p>
      </div>

      {/* ── INTERESTS ── */}
      <div className="about-content__card about-content__card--interests">
        <h3 className="about-content__card-title">INTERESES</h3>
        <div className="about-content__interests-grid">
          {INTERESTS.map(({ Icon, title, desc }) => (
            <div key={title} className="about-content__interest-item">
              <span className="about-content__interest-icon"><Icon /></span>
              <div className="about-content__interest-text">
                <p className="about-content__interest-title">{title}</p>
                <p className="about-content__interest-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="about-content__card about-content__card--stats">
        <h3 className="about-content__card-title">CHARACTER STATS</h3>
        <div className="about-content__stats-list">
          {STATS.map((stat) => (
            <div key={stat.label} className="about-content__stat-row">
              <span className="about-content__stat-label">{stat.label}</span>
              <div className="about-content__stat-bar-track">
                <div
                  className="about-content__stat-bar-fill"
                  style={{ width: `${stat.value}%` }}
                >
                  <span className="about-content__stat-value">{stat.value}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AboutContent;

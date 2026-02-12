import "../../styles/Map/ExperienceBar.scss";

function ExperienceBar({ visible, currentXP, maxXP }) {
  const percentage = (currentXP / maxXP) * 100;

  return (
    <div className={`xp-bar ${visible ? "xp-bar--visible" : ""}`}>
      <div className="xp-bar__container">
        <div className="xp-bar__label">XP</div>
        <div className="xp-bar__track">
          <div
            className="xp-bar__fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="xp-bar__text">
          {currentXP}/{maxXP}
        </div>
      </div>
    </div>
  );
}

export default ExperienceBar;

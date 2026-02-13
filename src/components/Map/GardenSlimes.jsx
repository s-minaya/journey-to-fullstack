import { useState } from "react";
import PurpleSlime from "../../images/purple-slime.gif";
import GreenSlime from "../../images/green-slime.gif";
import RedSlime from "../../images/red-slime.gif";
import "../../styles/Map/GardenSlimes.scss";

const SLIMES = [
  { id: 1, src: PurpleSlime, alt: "Purple garden slime" },
  { id: 2, src: GreenSlime, alt: "Green garden slime" },
  { id: 3, src: RedSlime, alt: "Red garden slime" },
];

function GardenSlimes({ visible }) {
  const [activeSlime, setActiveSlime] = useState(null);

  return (
    <div className={`garden-slimes ${visible ? "garden-slimes--visible" : ""}`}>
      {SLIMES.map((slime) => (
        <div
          key={slime.id}
          className={`garden-slimes__slime garden-slimes__slime--${slime.id}`}
          onMouseEnter={() => setActiveSlime(slime.id)}
          onMouseLeave={() => setActiveSlime(null)}
        >
          <img src={slime.src} alt={slime.alt} className="garden-slimes__img" />
          {activeSlime === slime.id && (
            <div className="garden-slimes__hearts">
              <span className="garden-slimes__heart garden-slimes__heart--1">
                ♡
              </span>
              <span className="garden-slimes__heart garden-slimes__heart--2">
                ♡
              </span>
              <span className="garden-slimes__heart garden-slimes__heart--3">
                ♡
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default GardenSlimes;

import { useEffect, useState, useRef } from "react";
import BlueSlime from "../../images/blue-slime.gif";
import "../../styles/Slime/SlimeCompanion.scss"

const TYPING_SPEED = 45;

function SlimeCompanion({ texts, visible }) {
  const [isTyping, setIsTyping] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isTyping) return;

    clearInterval(intervalRef.current);
    setDisplayedText("");
    setShowBubble(true);

    const fullText = texts[currentTextIndex];
    let charIndex = 0;

    intervalRef.current = setInterval(() => {
      charIndex++;
      setDisplayedText(fullText.slice(0, charIndex));

      if (charIndex >= fullText.length) {
        clearInterval(intervalRef.current);
      }
    }, TYPING_SPEED);

    return () => clearInterval(intervalRef.current);
  }, [isTyping, currentTextIndex, texts]);

  const handleSlimeClick = () => {
    clearInterval(intervalRef.current);

    if (!isTyping) {
      setCurrentTextIndex(0);
      setIsTyping(true);
      return;
    }

    const nextIndex = currentTextIndex + 1;

    if (nextIndex < texts.length) {
      setCurrentTextIndex(nextIndex);
    } else {
      setIsTyping(false);
      setShowBubble(false);
      setDisplayedText("");
      setCurrentTextIndex(0);
    }
  };

  return (
    <div className={`slime__container ${visible ? "slime__container--visible" : ""}`}>
      {showBubble && (
        <div className="slime__speech-bubble">
          <p className="slime__speech-text">{displayedText}</p>
        </div>
      )}
      <img
        className="slime__img"
        src={BlueSlime}
        alt="Slime compañero"
        onClick={handleSlimeClick}
      />
    </div>
  );
}

export default SlimeCompanion;
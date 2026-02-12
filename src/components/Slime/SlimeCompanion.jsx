import { useEffect, useState, useRef } from "react";
import BlueSlime from "../../images/blue-slime.gif";
import "../../styles/Slime/SlimeCompanion.scss";

const TYPING_SPEED = 45;

function SlimeCompanion({ texts = [], visible, showContactButton = false, onContactClick }) {
  const [isTyping, setIsTyping] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showBubble, setShowBubble] = useState(false);
  const intervalRef = useRef(null);

  // =============================
  // Reinicia la animación cada vez que los textos cambian
  // =============================
  useEffect(() => {
    // Si no hay textos, no hacemos nada
    if (!texts || texts.length === 0) return;
    // Reiniciamos al primer texto
    setCurrentTextIndex(0);
    setIsTyping(true);
  }, [texts]);

  // =============================
  // Efecto para "escribir" el texto
  // =============================
  useEffect(() => {
    if (!isTyping) return;
    if (!texts || texts.length === 0) return;

    clearInterval(intervalRef.current);
    setDisplayedText("");
    setShowBubble(true);

    const fullText = texts[currentTextIndex];
    if (!fullText) return;

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

  // =============================
  //      Click en el slime
  // =============================
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
    <div
      className={`slime__container ${visible ? "slime__container--visible" : ""}`}
    >
      {showBubble && (
        <div className="slime__speech-bubble">
          <p className="slime__speech-text">{displayedText}</p>
          {showContactButton && currentTextIndex === texts.length - 1 && (
            <button 
              className="slime__contact-button"
              onClick={onContactClick}
            >
              IR A LA TABERNA →
            </button>
          )}
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
import SlimeCompanion from "../Slime/SlimeCompanion";
import "../../styles/Map/MapSlimeCompanion.scss";

function MapSlimeCompanion({ texts, visible, showContactButton, onContactClick }) {
  return (
    <div className="map-slime">
      <SlimeCompanion 
        texts={texts} 
        visible={visible}
        showContactButton={showContactButton}
        onContactClick={onContactClick}
      />
    </div>
  );
}

export default MapSlimeCompanion;
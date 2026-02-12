import SlimeCompanion from "../Slime/SlimeCompanion";
import "../../styles/Map/MapSlimeCompanion.scss";

function MapSlimeCompanion({ texts, visible }) {
  return (
    <div className="map-slime">
      <SlimeCompanion texts={texts} visible={visible} />
    </div>
  );
}

export default MapSlimeCompanion;

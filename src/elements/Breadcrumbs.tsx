import "./Breadcrumbs.css";
import { BsArrowRight } from "react-icons/bs";

const Breadcrumbs: React.FC<{ genre: string; genres: string[] }> = (props) => {
  return (
    <div>
      <div className="gradient-line"></div>
      <div className="breadcrumbs">
        {props.genres[0] === props.genre ? (
          <div className="music-type" style={{ color: "white" }}>
            {props.genres[0]}
          </div>
        ) : (
          <div className="music-type" style={{ color: "#DCA1F8" }}>
            {props.genres[0]}
          </div>
        )}
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        {props.genres[1] === props.genre ? (
          <div className="music-type" style={{ color: "white" }}>
            {props.genres[1]}
          </div>
        ) : (
          <div className="music-type" style={{ color: "#DCA1F8" }}>
            {props.genres[1]}
          </div>
        )}
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        {props.genres[2] === props.genre ? (
          <div className="music-type" style={{ color: "white" }}>
            {props.genres[2]}
          </div>
        ) : (
          <div className="music-type" style={{ color: "#DCA1F8" }}>
            {props.genres[2]}
          </div>
        )}
        <div className="arrow">
          <BsArrowRight color="#DCA1F8" fontSize="2rem" />
        </div>
        {props.genres[3] === props.genre ? (
          <div className="music-type" style={{ color: "white" }}>
            {props.genres[3]}
          </div>
        ) : (
          <div className="music-type" style={{ color: "#DCA1F8" }}>
            {props.genres[3]}
          </div>
        )}
      </div>
      <div className="border"></div>
    </div>
  );
};
export default Breadcrumbs;

import "./charts.css";
import PropTypes from "prop-types";

const Chartbar = ({ width, height, bgColor }) => {
  const definedStyle = {
    background: bgColor,
    width: `${width}%`,
    height: height,
  };

  return (
    <section id="skills_section">
      <h1>skills</h1>
      <div className="holder">
        <p>HTML</p>
        <div className="progresss" style={{ height: `${height}px` }}>
          <div className="progresss-bar" style={definedStyle}>
            <span>{width}%</span>
          </div>
        </div>
        <div className="circular">
          <div className="contenttss">45%</div>
        </div>
        <div className="gauge-container">
          <svg className="gauge" viewBox="0 0 150 150">
            <circle className="rail" r="" cx="75" cy="75"></circle>
            <circle
              className="guage-progress"
              r="67"
              data-target="84"
              cx="75"
              cy="75"
            ></circle>
          </svg>

          <span className="center percentage">
            <span className="value">0</span>
            <span className="percentSymbol">%</span>
          </span>
        </div>
      </div>
    </section>
  );
};

Chartbar.propTypes = {
  width: PropTypes.number.isRequired,
  bgColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

Chartbar.defaultProps = {
  bgColor: "#b4ca34",
  width: "50",
  height: "18",
};

export default Chartbar;

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";

const MeteoDetails = (props) => {
  const date = new Date().toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = new Date().toLocaleString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const mont = new Date().toLocaleDateString("en-us", {
    month: "short",
  });

  const day1 = new Date().getDate() + 1;
  const day2 = new Date().getDate() + 2;
  const day3 = new Date().getDate() + 3;
  const day4 = new Date().getDate() + 4;

  return (
    <>
      {/* meteo */}
      <Col className="text-center">
        <p className="m-0 fw-light">
          {date} - {time}
        </p>
        <p className="temperature">{props.details.city.name}</p>
        <img
          src={`http://openweathermap.org/img/wn/${props.details.list[0].weather[0].icon}@2x.png`}
          alt="meteo icon"
          className="img-fluid"
        />
        <p className="temperature">{props.details.list[0].main.temp.toFixed()}°C</p>
        <p className="fs-6 fw-light my-3 letter-spacing">
          MIN {props.details.list[0].main.temp_min.toFixed()}°C | MAX {props.details.list[0].main.temp_max.toFixed()}
          °C{" "}
        </p>
      </Col>

      {/* details box */}
      <Row className="d-flex justify-content-center mt-4 mx-lg-3  box rounded p-2">
        <Col className="text-center">
          <p className="m-0 fw-light">Feels Like</p>
          <div>
            <p className="m-0">
              <FontAwesomeIcon icon={faSun} className="me-1" /> {props.details.list[0].main.feels_like.toFixed()}°C
            </p>
          </div>
        </Col>

        <Col className="text-center">
          <p className="m-0 fw-light">Humidity</p>
          <div>
            <p className="m-0">
              <FontAwesomeIcon icon={faDroplet} className="me-1" /> {props.details.list[0].main.humidity}%
            </p>
          </div>
        </Col>

        <Col className="text-center">
          <p className="m-0 fw-light">Wind</p>
          <div>
            <p className="m-0">
              <FontAwesomeIcon icon={faWind} className="me-1" /> {props.details.list[0].wind.speed.toFixed()} MPH
            </p>
          </div>
        </Col>
      </Row>

      {/* days */}
      <Row className="d-flex justify-content-between mt-4 mx-lg-3 row-cols-3 row-cols-lg-4 mini-box rounded py-2 mb-2">
        <Col className="text-center">
          <p className="m-0">
            {mont} {day1}th
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${props.details.list[1].weather[0].icon}@2x.png`}
            alt="meteo icon"
            className="img-fluid"
          />
          <p className="m-0 fw-light fs-6">{props.details.list[1].weather[0].main}</p>
        </Col>
        <Col className="text-center">
          <p className="m-0">
            {mont} {day2}th
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${props.details.list[2].weather[0].icon}@2x.png`}
            alt="meteo icon"
            className="img-fluid"
          />
          <p className="m-0 fw-light">{props.details.list[2].weather[0].main}</p>
        </Col>
        <Col className="text-center">
          <p className="m-0">
            {mont} {day3}th
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${props.details.list[3].weather[0].icon}@2x.png`}
            alt="meteo icon"
            className="img-fluid"
          />
          <p className="m-0 fw-light"> {props.details.list[3].weather[0].main}</p>
        </Col>
        <Col className="text-center  lg-only">
          <p className="m-0">
            {mont} {day4}th
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${props.details.list[4].weather[0].icon}@2x.png`}
            alt="meteo icon"
            className="img-fluid"
          />
          <p className="m-0 fw-light"> {props.details.list[4].weather[0].main}</p>
        </Col>
      </Row>

      {/* sm screen - image */}
      <div className="sm-only">
        <img src="/assets/image/meteo-icons.png" alt="meteo icons" className="img-fluid mt-3"></img>
      </div>
    </>
  );
};

export default MeteoDetails;

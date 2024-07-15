import React, { useState, useEffect } from "react";
import MeteoDetails from "./MeteoDetails";
import { Container, Row, Col } from "react-bootstrap";
import "./MeteoApp.css"; // Importa il file CSS

const MeteoApp = () => {
  const [meteo, setMeteo] = useState(null);
  const [location, setLocation] = useState("");
  const [debouncedLocation, setDebouncedLocation] = useState(location);

  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${debouncedLocation}&units=Metric&cnt=5&APPID=`;
  const APIKEY = "1fe0bb31c054a6d7ef8ce1c5e5600cb8";

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedLocation(location);
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [location]);

  useEffect(() => {
    if (debouncedLocation) {
      fetch(URL + APIKEY)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Problema nella chiamata API");
          }
        })
        .then((data) => {
          console.log("METEO", data);
          setMeteo(data);
        })
        .catch((error) => {
          console.log("ERRORE", error);
        });
    }
  }, [debouncedLocation]);

  const clearLocation = () => {
    setLocation("");
  };

  return (
    <Container className="d-flex justify-content-center align-items-start full-height p-0">
      <Row className="d-flex justify-content-center align-items-center w-100 my-0 my-lg-3 my-md-auto">
        <Col md={6} lg={5} className="meteo-box p-4">
          <p className="text-center fs-6 fw-light mb-2">Forecast</p>

          {/* search */}
          <Row className="d-flex justify-content-center mb-3">
            <Col xs={12} md={10} lg={8} className="d-flex justify-content-center align-items-center position-relative">
              <form onSubmit={(e) => e.preventDefault()} className="w-100">
                <input
                  className="search-input rounded"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Enter the city name"
                  type="text"
                  required
                />
                {location && (
                  <button type="button" className="clear-button" onClick={clearLocation}>
                    &times;
                  </button>
                )}
              </form>
            </Col>
          </Row>

          {/* meteo details */}
          {meteo && (
            <>
              <MeteoDetails details={meteo} />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MeteoApp;

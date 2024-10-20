import { useState } from "react";
import "../App.css";
import "../country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className={`country ${visited ? "visited" : "none"}`}>
      <div>
        <img src={flags?.png} alt="" />
        <h3 style={{ color: visited ? "purple" : "" }}>
          Country Name: {name?.common}
        </h3>
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>CCA3: {cca3}</p>
        <button
          style={{ marginBottom: "20px" }}
          onClick={() => handleVisitedCountry(country)}
        >
          Mark As Visited
        </button>
        <br />
        <button onClick={handleVisited}>Visited</button>
        {visited && <p>Already Visited</p>}
      </div>
    </div>
  );
};

export default Country;

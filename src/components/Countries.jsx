import { useEffect, useState } from "react";
import "../countries.css";
import Country from "./Country";
function Countries() {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const handleVisitedCountry = (country) => {
    const allVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(allVisitedCountry);
    console.log(visitedCountry);
  };
  useEffect(() => {
    const fetchCountry = async () => {
      const url = "https://restcountries.com/v3.1/all";
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
    };
    fetchCountry();
  }, []);
  return (
    <>
      <div>
        <h3>Visited Country List</h3>
        <ul>
          {visitedCountry.map((c) => (
            <li>{c?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </>
  );
}
export default Countries;

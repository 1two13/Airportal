import airportData from '../db/airport.json';

export const getAirportData = () => {
  return airportData;
};

export const search = (keyWord) => {
  if (keyWord === null || keyWord === undefined || keyWord === '') {
    return airportData;
  }

  return Object.values(airportData).filter(
    (el) =>
      el.IATA.includes(keyWord?.toUpperCase()) ||
      el.country.includes(keyWord) ||
      el.location.includes(keyWord) ||
      el.korean.includes(keyWord) ||
      el.english.toUpperCase().includes(keyWord?.toUpperCase())
  );
};

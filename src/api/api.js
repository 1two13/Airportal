import airportData from '../db/airport.json';
import { IATA, COUNTRY, LOCATION, AIRPORT_NAME } from '../static/constants';

export const getAirportData = () => {
  return airportData;
};

export const search = (keyWord, selected) => {
  const data = Object.values(airportData);

  if (keyWord === null || keyWord === undefined || keyWord === '') {
    return airportData;
  }

  if (selected === IATA) {
    return data.filter((el) => el.IATA.includes(keyWord?.toUpperCase()));
  }

  if (selected === COUNTRY) {
    let i = 0;
    let arr = [];
    while (i < data.length) {
      if (data[i].country.includes(keyWord)) {
        arr.push(data[i]);
      }
      i++;
    }

    return arr;
  }

  if (selected === LOCATION) {
    let i = 0;
    let arr = [];
    while (i < data.length) {
      if (data[i].location.includes(keyWord)) {
        arr.push(data[i]);
      }
      i++;
    }

    return arr;
  }

  if (selected === AIRPORT_NAME) {
    return data.filter(
      (el) =>
        el.korean.includes(keyWord) || el.english.toUpperCase().includes(keyWord?.toUpperCase())
    );
  }

  return data.filter(
    (el) =>
      el.IATA.includes(keyWord?.toUpperCase()) ||
      el.country.includes(keyWord) ||
      el.location.includes(keyWord) ||
      el.korean.includes(keyWord) ||
      el.english.toUpperCase().includes(keyWord?.toUpperCase())
  );
};

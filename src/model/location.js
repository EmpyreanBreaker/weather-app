const location = () => {
  // Private fields
  let country = "";
  let name = "";
  let region = "";

  const create = (newCountry, newName, newRegion) => {
    country = newCountry;
    name = newName;
    region = newRegion;
  };

  const getCountry = () => {
    return country;
  };

  const getData = () => {
    return { country, name, region };
  };

  const getName = () => {
    return name;
  };

  const getRegion = () => {
    return region;
  };

  const setCountry = (newCountry) => {
    country = newCountry;
  };

  const setName = (newName) => {
    name = newName;
  };

  const setRegion = (newRegion) => {
    region = newRegion;
  };

  return {
    create,
    getCountry,
    getData,
    getName,
    getRegion,
    setCountry,
    setName,
    setRegion,
  };
};

export { location };

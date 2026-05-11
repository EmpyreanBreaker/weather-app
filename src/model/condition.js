const condition = () => {
  // Private fields
  let condition = "";
  let feelslike = 0;
  let humidity = 0;
  let icon = "";
  let temp = 0;
  let wind = 0;

  const create = (newCondition, newFeelslike, newHumidity, newIcon, newTemp, newWind) => {
    condition = newCondition;
    feelslike = newFeelslike;
    humidity = newHumidity;
    icon = newIcon;
    temp = newTemp;
    wind = newWind;
  };

  const getCondition = () => {
    return condition;
  };

  const getFeelslike = () => {
    return feelslike;
  };

  const getHumidity = () => {
    return humidity;
  };

  const getIcon = () => {
    return icon;
  };

  const getTemp = () => {
    return temp;
  };

  const getWind = () => {
    return wind;
  };

  const getData = () => {
    return { condition, feelslike, humidity, icon, temp, wind };
  };

  const setCondition = (newCondition) => {
    condition = newCondition;
  };

  const setFeelslike = (newFeelslike) => {
    feelslike = newFeelslike;
  };

  const setHumidity = (newHumidity) => {
    humidity = newHumidity;
  };

  const setIcon = (newIcon) => {
    icon = newIcon;
  };

  const setTemp = (newTemp) => {
    temp = newTemp;
  };

  const setWind = (newWind) => {
    wind = newWind;
  };

  return {
    create,
    getData,
    getCondition,
    getFeelslike,
    getHumidity,
    getIcon,
    getTemp,
    getWind,
    setCondition,
    setFeelslike,
    setHumidity,
    setIcon,
    setTemp,
    setWind,
  };
};

export { condition };
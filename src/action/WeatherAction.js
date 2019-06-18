export const fetchWeather = (lat, long) => dispatch =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e5f85889af2e7ddeeb2e38470c35a02f`
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch(changeWeather(json));
    });

export const changeWeather = response => {
  return {
    type: "CHANGE_WEATHER",
    payload: response
  };
};

const initialState = {
  WeatherArr: {
    main: {
      temp: 0,
      humidity: 0
    }
  }
};

export function changeWeather(state = initialState, action) {
  //console.log(action.payload);
  switch (action.type) {
    case "CHANGE_WEATHER":
      return {
        ...state,
        WeatherArr: action.payload
      };

    default:
      return state;
  }
}

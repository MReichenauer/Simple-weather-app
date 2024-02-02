/**
 * Open Weather Map API
 *
 * <https://openweathermap.org/current>
 */

const API_KEY = "365ca03ea334b9793f1553a4f97bfc4f";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

const FAKE_SLOW_API = true;
const FAKE_SLOW_API_DELAY = 2000;

/**
 * Get current weather for city from OpenWeatherMap API
 * @param {string} city
 */
const getCurrentWeather = async (city) => {
	// get current weather conditions
	const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

	// check if response is ok
	if (!response.ok) {
		throw new Error(`${response.status} ${response.statusText}`); // 404 Not Found
	}

	// convert response from JSON
	const data = await response.json();

	// return current weather conditions
	return data;
}

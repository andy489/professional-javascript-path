class WeatherAPI {
  apiVersion = 'v1'

  async getWeather(city) {
    console.log(`Getting weather for ${city}`)

    if (Math.random() < 0.75) throw new Error('Something went wrong')
    return {
      apiVersion: this.apiVersion,
      temperature: 20,
      humidity: 80,
      city: city,
    }
  }
}

async function main() {
  const weatherAPI = new WeatherAPI()
  console.log(await weatherAPI.getWeather('London'))
  console.log(await weatherAPI.getWeather('Dublin'))
}

main().catch(console.error)
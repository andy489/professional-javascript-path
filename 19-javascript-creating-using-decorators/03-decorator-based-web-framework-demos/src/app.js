import { Controller, Get, Inject, Injectable, startApp } from "./framework.js"

@Injectable('CitiesDB')
class CitiesDB {
  getCities() {
    console.log('CitiesDB - Getting a list of cities')
    return ['London', 'New York', 'Dublin']
  }
}

@Controller('/api')
class WeatherController {

  @Get('/forecast')
  getForecast() {
    return {
      apiVersion: 'v1',
      temperature: 20,
      humidity: 80,
      city: 'London',
    }
  }
}

@Controller('/api')
class CitiesController {

  @Inject('CitiesDB')
  citiesDb;

  @Get('/cities')
  get() {
    return {
      cities: this.citiesDb.getCities()
    }
  }
}

startApp()

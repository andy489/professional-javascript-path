function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// Decorator factory
function retry(retryOptions) {
  // Decorator function
  return function(target, context) {
    console.log('Applying retry decorator')

    // New method that implements retries
    const resultMethod = async function (...args) {
      console.log('@retry - Running the retry decorator')
      let lastError = undefined

      for (let attemptNum = 1; attemptNum <= retryOptions.maxRetryAttempts; attemptNum++) {
        try {
          console.log(`@retry - Attempt #${attemptNum}`)
          return await target.apply(this, args)
        } catch (error) {
          lastError = error
          if (attemptNum < retryOptions.maxRetryAttempts) {
            console.log('@retry - Retrying...')
            await sleep(retryOptions.delayMs)
          }
        }
      }

      throw lastError
    }

    return resultMethod
  }
}

function log(target, context) {
  const resultMethod = async function (...args) {
    console.log(`@log - Running the ${context.name} method`)
    try {
      return await target.apply(this, args)
    } finally {
      console.log(`@log - Method ${context.name} finished`)
    }
  }

  return resultMethod
}

class Metric {
  constructor(name) {
    this.name = name
  }

  // Method returning a decorator
  time() {
    const metricThis = this
    // Decorator
    return function (target, context) {
      // New method that captures time metric
      const resultMethod = async function (...args) {
        const start = Date.now()
  
        try {
          return await target.apply(this, args)
        } finally {
          const end = Date.now()
          const timeMs = end - start
  
          console.log(
            `@time - Metric ${metricThis.name} value ${timeMs}ms to execute`,
          )
        }
      }
  
      return resultMethod
    }
  }
}

function createMetric(name) {
  return new Metric(name)
}

const weatherTiming = createMetric('weather.timing')

function logAndRetry(target, context) {
  const retryDecorator = retry({ maxRetryAttempts: 4, delayMs: 500 })
  const targetWithRetries = retryDecorator(target, context)
  return log(targetWithRetries, context)
}

class WeatherAPI {
  apiVersion = 'v1'

  @logAndRetry
  @weatherTiming.time()
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

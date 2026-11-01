import express from 'express'

const app = express()

const port = 3000

const pathForControllerCtor = new Map()
const constructorForLabel = new Map()

export function Injectable(label) {
  return function (target, context) {
    console.log(
      `@Injectable: Registering an injectable type for label '${label}'`,
    )
    constructorForLabel.set(label, target)
  }
}

export function Inject(name) {
  return function (target, context) {
    console.log(`@Inject - injecting a value for label '${name}'`)
    return () => {
      console.log('Init for the name: ', name)
      const targetCtor = constructorForLabel.get(name)
      const newInstance = new targetCtor()
      return newInstance
    }
  }
}

export function Controller(urlPath) {
  return function (target, context) {
    console.log(`@Controller - Registering a controller for path: ${urlPath}`)
    pathForControllerCtor.set(target, urlPath)
    return target
  }
}

export function Get(subPath) {
  return function (target, context) {
    console.log(
      `@Get - Registering a GET handler for controller: ${target.constructor.name}`,
    )

    context.addInitializer(function () {
      const controllerPath = pathForControllerCtor.get(this.constructor)
      if (!controllerPath)
        throw new Error(
          `Controller for type ${this.constructor.name} not registered`,
        )

      const fullPath = controllerPath + subPath
      console.log(`@Get - Registering a handler for path: ${fullPath}`)

      app.get(fullPath, (req, res) => {
        const endpointResponse = target.call(this)
        res.json(endpointResponse)
      })
    })

    return target
  }
}

export function startApp() {
  console.log('Starting app')

  for (const controllerCtor of pathForControllerCtor.keys()) {
    const _ = new controllerCtor()
  }

  app.listen(port, function () {
    console.log(`Started Express server on port ${port}`)
  })
}

export function notNull(target, context) {
  _addCheck(
    context.metadata,
    (object) => {
      if (!object[context.name]) {
        return `'${context.name}' is required`
      }
      return null
    }
   )
}

export function notNegative(target, context) {
  _addCheck(
    context.metadata,
    (object) => {
      if (object[context.name] < 0) {
        return `'${context.name}' must be non-negative`
      }
      return null
    }
  )
}

function _addCheck(metadata, check) {
  const checks = (metadata['checks'] ??= [])
  checks.push(check)
}

/**
 * Validate an object using a list of checks
 * defined in the metadata.
 *
 * Expects a class to have metadata:
 * {
 *  "checks": ((object) => string | null)[]
 * }
 *
 * Returns:
 * {
 *  errors: string[],
 *  isValid: boolean
 * }
 */
export function validateObject(object) {
  const metadata = object.constructor[Symbol.metadata]
  const checks = metadata['checks']

  const errors = []

  for (const check of checks) {
    const error = check(object)
    if (error) {
      errors.push(error)
    }
  }

  return {
    errors,
    isValid: errors.length === 0,
  }
}

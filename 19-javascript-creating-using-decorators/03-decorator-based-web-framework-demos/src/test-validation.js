import { notNull, validateObject, notNegative } from "./framework.js"

Symbol.metadata ??= Symbol('Symbol.metadata')

class User {
  @notNull
  username

  @notNegative
  age

  @notNull
  location
}


const user = new User()
user.username = 'John'
user.age = -1
user.location = null

console.log(validateObject(user))

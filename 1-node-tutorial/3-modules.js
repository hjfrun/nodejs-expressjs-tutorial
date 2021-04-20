// CommonJS, every single file is module (by default)

// Modules - Encapsulated Code (only share minimum)

const { hjf, htj } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

require('./7-mind-grenade')

// console.log(data)

sayHi('mm')
sayHi(hjf)
sayHi(htj)

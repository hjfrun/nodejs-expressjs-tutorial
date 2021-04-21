let { people } = require('../data')

const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' })
  }
  return res.status(201).send({ success: true, person: name })
}

const createPersonPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, msg: 'Please provide name value' })
  }
  return res.status(201).send({ success: true, data: [...people, { "name": name }] })
}

const updatePerson = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const person = people.find(person => person.id === +id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${id}` })
  }
  const newPerson = people.map(person => {
    if (person.id === +id) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: person })
}

const deletePerson = (req, res) => {
  const { id } = req.params

  const person = people.find(person => person.id === +id)
  if (!person) {
    return res.status(404).json({ success: false, msg: `no person with id ${id}` })
  }

  const newPeople = people.filter(person => person.id !== +id)
  return res.status(200).send({ success: true, data: newPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson
}

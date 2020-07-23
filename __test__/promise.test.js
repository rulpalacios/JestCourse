const getData = require('../src/promise')
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('Deberia retornar la informacion de goku', () => {
  return getData(API).then(response => {
    expect(response.data.name).toBe('goku')
  })
})

it('deberia fallar por url invalida', () => {
  expect.assertions(1)
  return getData('asdasdas').catch(err => expect(err).not.toBeNull())
})
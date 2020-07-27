const getData = require('../src/promise')
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('deberia retornar la informacion de goku', async () => {
  const response = await getData(API)

  expect(response.data.name).toBe('goku')
})

it('deberia fallar el test con una url invalida', async () => {
  expect.assertions(1)
  try{
    await getData('asdasda')
  } catch(err){
    expect(err).not.toBeNull()
  }
})
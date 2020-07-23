const {carsList, brandsList} = require('../src/arrays')

describe('Verificando las marcas existentes', () => {
  test('Que el arreglo no sea null', () => {
    expect(brandsList()).not.toBeNull()
  })  
})

describe('Verificando los autos existentes',() => {
  test('Que el arreglo no sea null', () => {
    expect(carsList()).not.toBeNull()
  })

  test('Verificar si contiene un VW Gold', () => {
    expect(carsList()).toContain('VW Golf GTI')
  })

  test('Comprobar la longitud del arreglo', () => {
    expect(carsList()).toHaveLength(4)
  })
})
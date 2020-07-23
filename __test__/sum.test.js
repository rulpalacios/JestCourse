const sum = require('../src/sum')

describe('pruebas para suma', () => {
  test('1 + 2 is 3',() => {
    expect(sum(1,2)).toBe(3)
  })

  // it('should return 3 whit 1 + 2', () => {
  //   expect(sum(1,2)).toBe(3)
  // })

  test('1 + (-2) is -1', () => {
    expect(sum(1, -2)).toBe(-1)
  })

  test('-1 + (-2) is -3', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
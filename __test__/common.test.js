test('2 + 2 = 4', () => {
  expect(2 + 2).toBe(4)
})

test('object validation', () => {
  const data = {username: 'raul_palacios'}
  const data2 = {username: 'raul'}

  expect(data).toEqual({username: 'raul_palacios'})
  expect(data).not.toEqual(data2)
})
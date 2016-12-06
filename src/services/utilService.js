/**
 * ['a', 'b', 'c'] ===> {a: bool, b: bool, c: bool}
 * @param array
 */
export const createMapping = (array, bool) => {
  let ret = Object.create(null)
  array = (array || [])
  array.forEach(item => { ret[item] = Boolean(bool) })
  return ret
}

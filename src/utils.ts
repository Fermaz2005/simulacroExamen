// Retorna true si todos los valores del arreglo son mayores a 10.
function todosMayoresADiez(array: number[]): boolean {
  for (const number of array) {
    if (number<=10) {
      return false
      break
    }
  }
  return true
}



export {todosMayoresADiez}
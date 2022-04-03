const arrayOfNumbers: Array<number> = [1,23,4,5,6,7]
const arrayOfStrings: Array<string> = ['Abu','Easy','Learn','Typescript']


function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
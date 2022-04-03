const isFetching: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e8

const message: string = 'Hello Typescript'

const numberArray: number[] = [1,2,3,4,2,2,3]
const numberArray2: Array<number> = [1,2,3,4,5,6,7]

const words: string[] = ['Hello', 'Typescript']

// Tuple
const contact: [string, number] = ['Vladilen', 1234567]

// Any

let variable: any = 42
// ...
variable = 'New String'
variable = []

// === === ===

function sayMyName(name: string): void {
  console.log(name)
}
sayMyName('Abdurahim')

// Never

function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while(true) {

  }
}

// Type

type Login = string

const login: Login = 'Admin'

type ID = string | number

const id1: ID = 123
const id2: ID = '123'

type SomeType = string | null | undefined

const anyArr: {name: any, age: any}= {name: true, age: '12'}
console.log(anyArr)
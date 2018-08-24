let a: number
let b: number
const numbers: number[] = [1, 2, 3]

function showProduct(first: number, second: number): void {
    console.log('The product is: ' + first * second)
}

a = 11
b = 17
showProduct(a, b)

// INTERFACE

interface Food {
    name: string
    quantity?: number
    info?: string
    multiply?(n: number): number
}

function getFood(food: Food): boolean {
    console.log(food)
    return true
}

getFood({
    name: 'Pancake',
    quantity: 4,
    info: ''
})

// CLASSES

class Menu {
    constructor(pages: number) {
        this.pages = pages
    }
    items: string[]
    pages: number
}

let m = new Menu(6)
// prettier-ignore
m.items = [
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'first',
    'second'
]

console.log(m)

"use strict";
var a;
var b;
var numbers = [1, 2, 3];
function showProduct(first, second) {
    console.log('The product is: ' + first * second);
}
a = 11;
b = 17;
showProduct(a, b);
function getFood(food) {
    console.log(food);
    return true;
}
getFood({
    name: 'Pancake',
    quantity: 4,
    info: ''
});
// CLASSES
var Menu = /** @class */ (function () {
    function Menu(pages) {
        this.pages = pages;
    }
    return Menu;
}());
var m = new Menu(6);
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
];
console.log(m);
//# sourceMappingURL=main.js.map
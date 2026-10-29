export function higherThan(num) {
    return function (element, index, array) {
        return element > num;
    };
}

export function hasSubstring(substr) {
    return function (element, index, array) {
        return element.includes(substr);
    };
}

/*
Напишите функцию `multiply(num)`, которая работает вот так:

console.log(multiply(5)(10));
// 50
 */
export function multiply(num) {
    return function (x) {
        return num * x;
    };
}

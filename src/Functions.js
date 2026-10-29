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

export function multiply(num) {
    return function (x) {
        return num * x;
    };
}

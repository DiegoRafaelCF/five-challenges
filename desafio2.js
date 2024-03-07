function isFibonacciNumber(numToCheck) {
    let last = 1;
    let lasButOne = 0;

    while (numToCheck > last) {
        const next = last + lasButOne;
        lasButOne = last;
        last = next;
    }

    return numToCheck === last || numToCheck === 0 ? 'O número informado faz parte da sequência' : 'O número informado não faz parte da sequência';
}

console.log(isFibonacciNumber(8));
// Resultado: O número informado faz parte da sequência

console.log(isFibonacciNumber(7));
// Resultado: O número informado não faz parte da sequência
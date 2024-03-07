function invertString(input) {
    let output = '';

    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i];
    }

    return output;
}

console.log(invertString('Diego'));
// Resultado: 'ogeiD';
// Teriam outras formas de deixar o código otimizado, mas tentei evitar métodos prontos;
function factorial(numero: number): number {
    let fact = 1
    if (numero > 0) {
       fact = numero * factorial(numero - 1);
    }
    return fact;
}

console.log("El Factorial es: " + factorial(5))
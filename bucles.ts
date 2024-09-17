let NumberC: number = 7;

console.log("Tabla del número " + NumberC);

for (let i = 0; i < 13; i++) {
    let multiplicacion = NumberC * i;
    console.log(NumberC + " * " + i + " = " + multiplicacion);
}

let contador: number = 0;
let NumberD: number = 8;

console.log("")
console.log("Tabla del numero " + NumberD)
while (contador != 13) {
    let multiplicacion = contador * NumberD
    console.log(NumberD + " * " + contador + " = " + multiplicacion);
    contador += 1
}
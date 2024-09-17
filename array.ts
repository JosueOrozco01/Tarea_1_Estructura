let arreglo: Array<number> = [5, 5, 10, 15, 20, 5]

let cantidad = 0

for (const value of arreglo) {
    console.log(value)
    cantidad += value
}
console.log("La suma de todos los números es: " + cantidad)
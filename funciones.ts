function edad(fecha_nacimiento: number, fecha_actual: number): number {
    let edad_calculada = fecha_actual - fecha_nacimiento
    return edad_calculada
}

function deporte(genero: string): string {
    if (genero.toLowerCase() == "Masculino".toLowerCase()) {
        let practicar = "Basquet, Futbol, Tenis y Futbol Americano";
        return practicar
    }
    else if (genero.toLowerCase() == "Femenino".toLowerCase()) {
        let practicar = "Valet, Natacion, Fisicoculturismo y Atletismo";
        return practicar
    }
    else
        return "Genero no distinguido"
}

function area(base: number, altura: number): number {
    let area_total = (base * altura)/2
    return area_total
}

console.log("La edad es: ", edad(2004, 2024))
console.log("El deporte segun tu genero es: ", deporte("Masculino"))
console.log("El area del triangulo es: ", area(10, 10))

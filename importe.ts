import { Persona } from "./clase";

let persona: Persona = new Persona("Fulanito", 22, "Guatemala");
console.log(persona);
persona.setNombre("Josue");
persona.setEdad(20);
persona.setCiudad("San Marcos");
console.log("Nombre " + persona.getNombre() + " tiene " + persona.getEdad() + " años y es de " + persona.getCiudad());
export class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre() {
        return this.nombre;
    }

    public setEdad(edad: number) {
        this.edad = edad;
    }

    public getEdad() {
        return this.edad;
    }

    public setCiudad(ciudad: string) {
        this.ciudad = ciudad;
    }

    public getCiudad() {
        return this.ciudad;
    }
}
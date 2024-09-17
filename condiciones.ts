let palabra: string = "acuatico".toLowerCase();

if (palabra == "Ave".toLowerCase())
    console.log("El animal es: " + palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toUpperCase());
else if (palabra == "Mamifero".toLowerCase())
    console.log("El animal es: " + palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toUpperCase());
else if (palabra == "Acuatico".toLowerCase())
    console.log("El animal es: " + palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase());
else 
    console.log("Animal no existente");

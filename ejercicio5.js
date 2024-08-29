// 5. Suma de elementos de un arreglo
function sumarElementos(arr) {
    // Calcular la suma y devolver el resultado junto con el promedio
    const suma = arr.reduce((a, b) => a + b, 0);
    const promedio = suma / arr.length;
    return { suma, promedio };
}
console.log(sumarElementos([8, 2, 6, 4, 5])); // Salida: { suma: 25, promedio: 5 }
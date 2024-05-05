//Ejercicio 1
const concatParams = (name, lastname, age) => {
    return `Hola mi nombre es ${name} ${lastname} y mi edad ${age}`;
}

console.log(concatParams("Mia", "Vasquez", 22));

//Ejercicio 2
const sumOfCubes = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += Math.pow(number, 3);
    }
    return sum;
}

console.log(sumOfCubes(1, 5, 9));



//Ejercicio 3
const typeValor = (valor) => {
    return typeof valor;
}

console.log(typeValor("Hola"));


//Ejercicio 4
const sumNumbers = (...numbers) => {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}
console.log(sumNumbers(1, 5));



//Ejercicio 5
const arrayFilter = (...valores) => {
    const filterString = valores.filter(valor => typeof valor !== "string");
    return filterString;
}

console.log(arrayFilter(1, 'Hola', true, 'Mundo', 42, 'JavaScript'));



//Ejercicio 6
const minMax = numeros => {
    const min = Math.min(...numeros);
    const max = Math.max(...numeros);
    return [min, max];
}

console.log(minMax([1, 2, 3, 4, 5]));

//Ejercicio 7
const formatPhoneNumber = (numeros) => {
    const chunks = [numeros.slice(0, 3), numeros.slice(3, 6), numeros.slice(6)];
    const formato = chunks.map(chunk => chunk.join('')).join('');
    return `(${formato.slice(0, 3)}) ${formato.slice(3, 6)}-${formato.slice(6)}`;
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Ejercicio 8
const findLargestNums = (matriz) => {
    return matriz.map(subMatriz => Math.max(...subMatriz));
}
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


//Ejercicio 9
const charIndex = (palabra, caracter) => {
    const primerIndice = palabra.indexOf(caracter);
    const ultimoIndice = palabra.lastIndexOf(caracter);
    return [primerIndice, ultimoIndice];
}

console.log(charIndex("hello", "l"));
console.log(charIndex("circumlocution", "c"));

//Ejercicio 10
const toArray = (objeto) => {
    return Object.entries(objeto);
}

console.log(JSON.stringify(toArray({ a: 1, b: 2 })));

//Ejercicio 11
const getBudgets = (personas) => {
    return personas.map(persona => persona.budget).reduce((total, budget) => total + budget, 0);
}
console.log(getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]));

//Ejercicio 12
const getStudentNames = (names) => {
    return names.map(nameS => nameS.name);
}

console.log(getStudentNames([
    { name: "Steve" },
    { name: "Mike" },
    { name: "John" }
])
);

//Ejercicio 13
const objectToArray = (objeto) => {
    return Object.getOwnPropertyNames(objeto).map(key => [key, objeto[key]]);
}

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
}))

//Ejercicio 14
const squaresSum = (n) => {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i ** 2;
    }
    return suma;
}
console.log(squaresSum(3));

//Ejercicio 15
const multiplyByLength = (array) => {
    const multiplicador = array.length;
    return array.map(value => value * multiplicador);
}

console.log(multiplyByLength([2, 3, 1, 0]));

//Ejercicio 16
const countdown = numero => {
    if (numero < 0) {
        return [];
    } else {
        let resultado = [];
        for (let i = numero; i >= 0; i--) {
            resultado.push(i);
        }
        return resultado;
    }
}

console.log(countdown(5));

//Ejercicio 17
const diffMaxMin = (numbers) => {
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    return max - min;
}
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));

//Ejercicio 18
const filterList = (valor) => {
    const inte = valor.filter((val) => typeof val === 'number');
    return inte;
}

console.log(filterList([1, 2, 3, "x", "y", 10]));

//Ejercicio 19
const repeat = (elemento, tiempos) => {
    let resultado = [];
    for (let i = 0; i < tiempos; i++) {
        resultado.push(elemento);
    }
    return resultado;
}

console.log(repeat(13, 5));

//Ejercicio 20
const vreplace = (cadena, vocal) => {
    return cadena.replace(/[aeiouAEIOU]/g, vocal);
}
console.log(vreplace("apples and bananas", "u"));

//Ejercicio 21
const findNemo = (cadena) => {
    let palabras = cadena.split(" ");

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === "Nemo") {
            return `¡I found Nemo at ${i + 1}!`;
        }
    }

    return "¡No se encontró a Nemo!";
}

// Ejemplo de uso
console.log(findNemo("I am finding Nemo !"));


//Ejercicio 22
const capLast = palabra => palabra.slice(0, -1) + palabra.slice(-1).toUpperCase();
console.log(capLast("hello"));


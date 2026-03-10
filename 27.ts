let price: number = 99.99;
let productName: string = "Telefon" ;
let inStock: boolean = true;



function multiply(a: number, b: number ) :
number {
    return a * b;
}

//MISOL:
console.log(multiply(5, 4)); // 20


interface Book {
    title: string
    pages: number
    author: string
}

const book :Book = {
    title: "Kitob",
    pages: 150,
    author: "yozuvchi"
};

console.log(book);
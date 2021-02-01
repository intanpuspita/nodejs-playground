const fullname = 'Intan'
const userAge = 27

const user = {
    fullname,
    age: userAge,
    location: 'Indonesia'
}

console.log(user)

// Object destructuring
// Destruct object into a single independent variable
const book = {
    title: 'The Archer',
    stock: 300,
    price: 2300,
    condition: 'New'
}

const {title:bookTitle, price, rating} = book
console.log(bookTitle)
console.log(price)
console.log(rating)

// Object destructuring inside a function
const transaction = (type, {title, price}) => {
    console.log(title)
}
transaction('order', book)
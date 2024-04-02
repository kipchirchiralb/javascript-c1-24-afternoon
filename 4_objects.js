// objects are labeled group of data
// we create objects using curly brackets
// objects are made up of key-value pairs separeted by commas
let product = {
    name: "T-shirt",
    price: 249.99,
    availableColors: ["green", "red", "white"],
    size: "M",
    "is V Neck": false,
    log: function (){
        console.log( this.name + " is " + this.price )
    }
}

product.log()


// // to access values of an object we can use the dot notation or bracket notation with the keys

// // e.g. to access/log the price of the product
// console.log( product.price );
// console.log( product["price"] );

// // e.g log available colors
// let tshirtColors = product.availableColors
// console.log(tshirtColors)
// // e.g. log the last color in the list of available colors
// console.log( tshirtColors[2] ); // white
// console.log( product.availableColors[2] ); // white
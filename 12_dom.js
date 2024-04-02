const testElem = document.querySelector("h3")
// text content
console.log( testElem.textContent );
testElem.textContent =  testElem.textContent +" additional text "
// creating elements
const newDiv = document.createElement("div")
newDiv.textContent = "hello there"
//adding elements to the page
testElem.appendChild(newDiv)

// styling elements using style attribute
newDiv.style.border = "2px solid red"
newDiv.style.width = "300px"
// other attributes
document.querySelector("h2").setAttribute("id","title")
document.querySelector("h2").setAttribute("data-count","1")

const newLinkEl = document.createElement("a")
newLinkEl.textContent = "Search here"
newLinkEl.setAttribute("href","https://google.com" )
newLinkEl.setAttribute("target", "_blank")

document.querySelector("h1").appendChild(newLinkEl)

let myH1 = document.querySelector("h1")
console.log( myH1.classList );
myH1.classList.add("over")
myH1.classList.remove("bg")
console.log( myH1.classList ); // 


// callbacks
// discus different types of events on the browser -- js
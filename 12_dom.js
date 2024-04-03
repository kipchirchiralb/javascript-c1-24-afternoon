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
/**
 * keyboard events - key up, key down, 
 * touch events
 * window - resize, close, loaded, scroll
 * form - submit, input- change,focus,active, 
 * mouse - click, hover, over, dbclick, 
 */

// addEventListener - HOF -- 2 arguments
// 1 -type of event
// function to be executed when the event is trigered on the selected element
const darkenBgButton = document.getElementById("darkenbg")


darkenBgButton.addEventListener("click", ()=>{
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector("body").style.color = "white"
} )

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("Page fully loaded!");
})

const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirmPassword")
const errorMessageEl = document.getElementById("errorMessage")

confirmPasswordInput.addEventListener("input", ()=>{
    
    console.log("changing");
    if(passwordInput.value == confirmPasswordInput.value){
        errorMessageEl.textContent = ""
    }else{
        errorMessageEl.textContent = "Password and Confirm Password Mismatch"
    }

})

// event propagation -- how the browser handle events

document.querySelector("form").addEventListener("submit", (event)=>{
    event.preventDefault()
    // fetch API - to submit a custom request
    console.log("Submitting request!"); 
})

// assynchronous -- 
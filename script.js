const sidebar = document.querySelector(".sidebar")
const content = document.querySelector(".container-content")
const homeContent = document.querySelector(".home")
const calculatorContent = document.querySelector(".calculator")

const menuClick = document.getElementsByName("menu-outline")[0]
const homeClick = document.getElementsByName("home-outline")[0]
const calculatorClick = document.getElementsByName("calculator-outline")[0]

menuClick.addEventListener("click", ()=>{
    if(sidebar.classList[1] == undefined){
        sidebar.classList.add("disable")
        content.classList.add("content-active")
    }
    else{
        sidebar.classList.remove("disable")
        content.classList.remove("content-active")
    }
})

homeClick.addEventListener("click", ()=>{
    if(homeContent.classList[1] != undefined){
        homeContent.classList.remove("disable")
        calculatorContent.classList.add("disable")
    }
})

calculatorClick.addEventListener("click", ()=>{
    if(calculatorContent.classList[1] != undefined){
        homeContent.classList.add("disable")
        calculatorContent.classList.add("active")
        calculatorContent.classList.remove("disable")
    }
})


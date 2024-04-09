const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const keys = ["(", ")", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "0", ".", "%", " "]

function calculate(){
    resultInput.value = "ERROR"
    resultInput.classList.add("error")
    const result = eval(input.value)
    resultInput.value = result
    resultInput.classList.remove("error")
}



function clear(){
    return input.value = "" , input.focus() , resultInput.value = ""
}


document.querySelectorAll(".charKey").forEach(function (charKeyBtn){
    charKeyBtn.addEventListener("click", function (){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
})

document.getElementById("clear").addEventListener("click", clear)

input.addEventListener("keydown", function(ev){
    ev.preventDefault()
    if (keys.includes(ev.key)){
        input.value += ev.key
    }
    if (ev.key === "Backspace"){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter"){
        calculate()
    }
    if (ev.key === "Escape"){
        clear()
        copy
    }
})

document.getElementById("equal").addEventListener("click", calculate)


document.getElementById("copyClipboard").addEventListener("click", function(ev){
    const target = ev.currentTarget
    if (target.innerText === "Copiar"){
        target.innerText = "Copiado!"
        target.classList.add("success")
        navigator.clipboard.writeText(resultInput.value)
    } else {
        target.innerText = "Copiar"
        target.classList.remove("success")
    }
})

document.getElementById("themeSwitcher").addEventListener("click", function () {
    if (main.dataset.theme === "dark") {
      root.style.setProperty("--bg-color", "#f1f5f9")
      root.style.setProperty("--border-color", "#aaa")
      root.style.setProperty("--font-color", "#212529")
      root.style.setProperty("--primary-color", "#26834a")
      main.dataset.theme = "light"
    } else {
      root.style.setProperty("--bg-color", "#212529")
      root.style.setProperty("--border-color", "#666")
      root.style.setProperty("--font-color", "#f1f5f9")
      root.style.setProperty("--primary-color", "#4dff91")
      main.dataset.theme = "dark"
    }
  })
// const button = document.querySelector('button')

// const onMouseClick = () => {
//     button.innerText = "Clicou!"
// }

// const onMouseEnter = () => {
//     button.innerText = "Mouse entrou!"
// }

// const onMouseLeave = () => {
//     button.innerText = "Mouse saiu!"
// }

const button = document.querySelector('button')

button.addEventListener("click", () => {
   button.innerText = "Clicou!"
})

button.addEventListener("mouseenter", () => {
    button.innerText = "Mouse entrou!"
})

button.addEventListener("mouseleave", () => {
    button.innerText = "Mouse saiu!"
})

document.body.addEventListener("keydown", (evento) => {
    const novoTexto = document.createElement("h2");
    novoTexto.innerText = `A tecla ${evento.key} foi pressionada!`;
    document.body.appendChild(novoTexto);
})
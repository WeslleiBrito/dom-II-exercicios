function adicionaItem(event) {
    event.preventDefault()
    const container = document.getElementById('container')
    const novoElemento = document.createElement('article')
    novoElemento.setAttribute('class', 'item')
    novoElemento.setAttribute('onclick', 'removeItem(event)')
    container.insertAdjacentElement('beforeend', novoElemento)

}



function removeItem(event) {
    /* O event.target devolve o elemento que gerou o evento */
    const elemento = event.target
        /* Quando especifico o "elemento" só ele será removido, mesmo exitindo vários elementos com a mesma classe que ele */
    elemento.classList.remove("item")
}
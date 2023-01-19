function adicionaItem(event) {
    event.preventDefault()
    const container = document.getElementById('container')

    const novoElemento = document.createElement('article')
    novoElemento.setAttribute('class', 'item')
    novoElemento.setAttribute('onclick', 'removeItem(event)')
    container.insertAdjacentElement('beforeend', novoElemento)

}



function removeItem(event) {
    /* O event.target devolve o elemento que gerou o evento, e nele mesmo eu executo a função de remover */
    event.target.remove()

}
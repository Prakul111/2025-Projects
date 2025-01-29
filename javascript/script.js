const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')



form.addEventListener('submit', e => {
    e.preventDefault()
    console.log(input.value);

    // Create an item list 
    const item = document.createElement('div')
    item.innerText = input.value
    item.classList.add('list-item')

    // add that input to the list 

    list.appendChild(item)

    // clear input

    input.value = ""

    // setup event listener to delete item when clicked

    item.addEventListener('click', () => {
        list.removeChild(item)
    })
})




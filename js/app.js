document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
    const form = document.querySelector("#new-recipe-form");
    form.addEventListener('submit', handleFormSubmit);
  
    const deleteForm = document.querySelector("#delete-all");
    deleteForm.addEventListener('click', handleDeleteButton);
  
  })

  
const createNewItem = function(event) {
    const newItem = document.createElement('li');
    newItem.classList.add("list-item")
  
    const header = document.createElement('h3')
    header.textContent = `${event.target.title.value}`
    const description = document.createElement('p')
    description.textContent = `${event.target.description.value}`
    const category = document.createElement('h4')
    category.textContent = `${event.target.category.value}`
  
    header.classList.add("list-item-text")
    description.classList.add("list-item-text")
    category.classList.add("list-item-text")
  
    newItem.appendChild(header)
    newItem.appendChild(document.createElement('hr'))
    newItem.appendChild(category)
    newItem.appendChild(description)
  
    return newItem
  }

  const handleFormSubmit = function(event){
    event.preventDefault();
  
    const recipeList = document.querySelector('#recipe-list')
    recipeList.appendChild(createNewItem(event))
  
    document.querySelector("#new-recipe-form").reset();
  }

  const handleDeleteButton = function(event){
    event.preventDefault();
    
    const listItems = document.querySelectorAll('li')
    const deleteList = document.querySelector('#recipe-list');
    listItems.forEach(listItem => deleteList.removeChild(listItem))
  }
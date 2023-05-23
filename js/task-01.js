const listEl = document.querySelector("#categories");
console.dir(`Number of categories: ${listEl.children.length}`);


const itemEl = document.querySelectorAll(".item");
itemEl.forEach(({firstElementChild, lastElementChild}) => {
    console.log(`Category: ${firstElementChild.textContent}\nElements: ${lastElementChild.children.length}`);
    
})
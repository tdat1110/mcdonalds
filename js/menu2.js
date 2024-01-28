// lay ra the div 
const productList= document.querySelector('#product-list')
console.log(productList)
products.forEach(
    (product)=>{
        const productItem = document.createElement('div')
        productItem.classList.add('product-item')
        productItem.innerHTML= 
          `<img src='${product.image}'/>
           <h3>${product.title}</h3>
           <span class='category'>${product.category}</span>
           <span>${product.price}</span>
          `
        productList.appendChild(productItem)
    }
)
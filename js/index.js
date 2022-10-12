// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span")
  const quantity = product.querySelector(".quantity input")
  const subtotal= price.innerHTML * quantity.value
  const totalValueHtml= product.querySelector(".subtotal span")
  totalValueHtml.textContent =  subtotal 



}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const collection = document.getElementsByClassName("product")
  const arrayCollection = [...collection]
  const totalHTML= document.querySelector('#total-value span')
  let total= 0
  
  for (let i=0; i< arrayCollection.length; i++){
    updateSubtotal(arrayCollection[i])
    const subtotal = arrayCollection[i].querySelector(".subtotal span")
   // console.log(typeof(subtotal.textContent))
     let element = Number(subtotal.textContent)
     total = element + total
  }
   // ITERATION 3
  //... your code goes here
  totalHTML.textContent = total

}

// ITERATION 4

function removeProduct(event) {
//   console.log(product)
//   product.remove()
  calculateAll()
  const target = event.currentTarget;
  
  target.parentNode.parentNode.remove()


}


// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const CollectionRemoves = document.getElementsByClassName("btn btn-remove")
  arrayRemoves = [...CollectionRemoves]
  for (let i=0; i < arrayRemoves.length ; i++){
    arrayRemoves[i].addEventListener('click', removeProduct)
    arrayRemoves[i].addEventListener('click', calculateAll)
  }
  //console.log(arrayRemoves)
  // const collectionProducts = document.getElementsByClassName("product")
  // const arrayProducts = [...collectionProducts]

  // for (let i=0; i < arrayRemoves.length ; i++){
  //   arrayRemoves[i].addEventListener('click', () => {
  //     removeProduct(arrayProducts[i])
  //   })
  

  // }
})
  //... your code goes here


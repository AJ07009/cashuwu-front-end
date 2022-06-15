var products = []

let pageSize = 12;
let currentPage = 1;

async function renderproducts(){
	await getData()
	var output = ""
	products.filter((row,index)=>{
		let start = (currentPage-1)*pageSize
		let end = currentPage * pageSize
		
		if(index>=start&&index<end)return true;
	}).forEach(item =>{
		
			
		output += `
             <div class="col-sm-3">
                     <div class="product-image-wrapper">
                     <div class="single-products">
 											<div class="productinfo text-center">
 					<img src="${item.PRODUCT_IMG}" alt="${item.PRODUCT}">
 					<p class="title">${item.PRODUCT}</p>
 					<p >${item.SUPERMARKET}</p>
 					<p >
 						<span>R${item.PRODUCT_PRICE}</span>
 					</p>
 					<button class="cart">Add to cart <i class="bx bx-cart-alt"></i></button>
                     </div>
                     </div>
                     </div>
                     </div>
			`;
		
	})

	document.querySelector(".products").innerHTML = output;


}


function previousPage(){
	if(currentPage>1)
		currentPage--;
		renderproducts()
}

function nextPage(){
	if((currentPage * pageSize)<products.length)
		currentPage++;
		renderproducts()
}

document.querySelector("#prevButton").addEventListener('click',
previousPage,false)

document.querySelector("#nextButton").addEventListener('click',
nextPage,false)

async function getData  (){
	const req = '/js/allproducts.json'
	// const response =  fetch('/js/allproducts.json');
	// const jsonfile =  response.json()
	// console.log(jsonfile)
	
	const res = await fetch(req)
    .then(res => res.json());
	products = res
	console.log(products)
}

renderproducts()

function search_product() {
    let input = document.getElementById('searchbar').value
    input=input.toUpperCase();
    let x = document.querySelectorAll('products');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}








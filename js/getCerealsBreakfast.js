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
		
			console.log(item.PRODUCT_CATEGORY)
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

async function getData  (){
	const req = '/js/allproducts.json'
	// const response =  fetch('/js/allproducts.json');
	// const jsonfile =  response.json()
	// console.log(jsonfile)
	
	const res = await fetch(req)
    .then(res => res.json());
	for(let item of res){
			if(item.PRODUCT_CATEGORY == "CEREALS BREAKFASTS" ){
				products.push(item)
		}
	}
	console.log(products)
}

renderproducts()

























// let http = new XMLHttpRequest();
// http.open('get', '/js/allproducts.json', true);
// http.send();
// let preview = []

// http.onload = function(){
// 	if(this.readyState == 4 && this.status == 200){

// 		let products = JSON.parse(this.responseText);

// 		let output = "";
//         console.log("this is running")
        
// 		for(let item of products){
//             console.log("this is running")
// 			if(item.PRODUCT_CATEGORY = "DAIRY EGGS" ){
// 			output += `
//             <div class="col-sm-3">
//                     <div class="product-image-wrapper">
//                     <div class="single-products">
// 											<div class="productinfo text-center">
// 					<img src="${item.PRODUCT_IMG}" alt="${item.PRODUCT}">
// 					<p class="title">${item.PRODUCT}</p>
// 					<p >${item.SUPERMARKET}</p>
// 					<p >
// 						<span>R${item.PRODUCT_PRICE}</span>
// 					</p>
// 					<button class="cart">Add to cart <i class="bx bx-cart-alt"></i></button>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
// 			`;
            
// 		}
// 	}

// 		document.querySelector(".products").innerHTML = output;
// 	}
// } 
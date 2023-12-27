const row= document.querySelector('.cars')
const getProducts= async() =>{
    const res= await fetch('https://655a17166981238d054d1b0d.mockapi.io/api/huy/Car')
    const products= await res.json()
    console.log(products);
    products.forEach((product) => {
        const productItem= document.createElement('div')
        productItem.classList.add('col-lg-4')
        productItem.classList.add('col-md-6')
        productItem.classList.add('mb-2')
        productItem.innerHTML=
       `   <div class="rent-item mb-4">9p       
       <img class="img-fluid mb-4 image" src= '${product.image}' alt="">
       <h4 class="text-uppercase mb-4">${product.name}</h4>
       <div class="d-flex justify-content-center mb-4">
           <div class="px-2">
               <i class="fa fa-car text-primary mr-1"></i>
               <span>${product.year}</span>
           </div>
           <div class="px-2 border-left border-right">
               <i class="fa fa-cogs text-primary mr-1"></i>
               <span>Số tự động</span>
           </div>
           <div class="px-2">
               <i class="fa fa-road text-primary mr-1"></i>
               <span>${product.km}KM</span>
           </div>
       </div>
       <a class="btn btn-primary px-3" href="">$${product.price}/Day</a>
   </div>
       `
        row.appendChild(productItem)
    });
    
}
getProducts()
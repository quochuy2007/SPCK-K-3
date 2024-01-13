const image=document.querySelector('#image')
const name=document.querySelector('#name')
const year=document.querySelector('#year')
const price=document.querySelector('#price')
const km=document.querySelector('#km')
const button=document.querySelector('#Signinbutton')
button.addEventListener('click',()=>{
    const imageValue=image.value;
    const nameValue=name.value;
    const yearValue=year.value;
    const priceValue=price.value;
    const kmValue=km.value;
    const product={
        image:imageValue,
        name:nameValue,
        year:yearValue,
        price:priceValue,
        km:kmValue,
    }
    fetch('https://655a17166981238d054d1b0d.mockapi.io/api/huy/Car', {
  method: 'POST',
  headers: {'content-type':'application/json'},
  // Send your data in the request body as JSON
  body: JSON.stringify(product)
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  alert ("Thêm sản phẩm thành công")
  // do something with the new task
}).catch(error => {
  // handle error
})
} )
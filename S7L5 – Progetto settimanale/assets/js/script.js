const MY_APY ='https://striveschool-api.herokuapp.com/api/product/';
const MY_AUTH="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NWYzN2Y4MWI0MjAwMTM5YjJhNDciLCJpYXQiOjE2NzkwNTY2OTUsImV4cCI6MTY4MDI2NjI5NX0.RoixCf7igvTQV_Hv2KKqPDJCEkOkdzEnzTbdRXsXbt4"


const myShop= function(){

    fetch(MY_APY,{
        method:'GET',
        headers: {
            "Authorization": MY_AUTH
            },
    })

    .then((response)=>{
        console.log(response)
        return response.json();
    })
    .then((events)=>{
        console.log(events)
        events.forEach((shopElement) => {
          console.log(shopElement);
          let shop = document.getElementById("shopContainer");
          shop.innerHTML += `
          <div class="card w-25 d-flex m-4 ; ">
          <img src="${shopElement.imageUrl}"  width="100px"  class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${shopElement.name}</h5>
            <p class="card-text">${shopElement.description}</p>
            <p class="card-rice">€ ${shopElement.price}</p>
            <a href="./details.html?eventId=${shopElement._id}" class="btn btn-success">Dettagli</a>
        </div>
              `;
    })
    console.log
 })
}
myShop()


const saveObject = async function (obj) {
  try {
      let response = await fetch(MY_APY, {
        method:'POST',
        body: JSON.stringify(obj),
        headers: {
            "Authorization": MY_AUTH,
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        alert('Saved successfully')
      } else {
        alert("Problem saving")
      }} catch (error) {
        console.log(error)
      }
    } 
  
let buttonRefernce = document.getElementById('button');
buttonRefernce.addEventListener('click', () => {
        let newObject = {
          name: document.getElementById('name').value,
          description: document.getElementById('description').value,
          brand: document.getElementById('brand').value,
          imageUrl:document.getElementById('url').value,
          price: document.getElementById('price').value
        }
        console.log(newObject)
  saveObject(newObject)
    })

 
    
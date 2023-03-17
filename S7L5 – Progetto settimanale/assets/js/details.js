const MY_APY = "https://striveschool-api.herokuapp.com/api/product/";
const MY_AUTH="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0NWYzN2Y4MWI0MjAwMTM5YjJhNDciLCJpYXQiOjE2NzkwNTY2OTUsImV4cCI6MTY4MDI2NjI5NX0.RoixCf7igvTQV_Hv2KKqPDJCEkOkdzEnzTbdRXsXbt4"
let eventId = new URLSearchParams(window.location.search).get("eventId");
console.log(eventId);
const myShop = function () {
  fetch(MY_APY + eventId, {
    method: "GET",
    headers: {
      Authorization: MY_AUTH,
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((events) => {
      console.log(events);
      console.log;
      let details = document.getElementById("subContainer");
      details.innerHTML = `
        <h1 class="mb-2">Dettagli prodotto</h1>
          <h3  class="mb-2">Name</h3>
        <input class="mb-2" id='nameInput' type="text" value="${events.name}" disabled>
          <h3  class="mb-2">Description</h3>
          <input  class="mb-2" id='descriptionInput' type="text" value="${events.description}" disabled>
          <h3  class="mb-2" >Brand</h3>
          <input  class="mb-2" id='brandInput' type="text" value="${events.brand}" disabled>
          <h3  class="mb-2">Image</h3>
          <input  class="mb-2" id='imageUrlInput' type="text" value="${events.imageUrl}" disabled>
          <h3  class="mb-2">Price</h3>
          <input  class="mb-2" id='priceInput' type="text" value="${events.price}€ " disabled>
             <h3  class="mb-2">ID</h3>
            <input  class="mb-2" id='idInput' type="text" value="${events._id}" disabled>
            <div>
              <button id="deleteButton" class="btn btn-danger mt-4"'>Elimina</button>
            </div>
            `;
      document.getElementById("deleteButton").addEventListener("click", () => {
        fetch(MY_APY + eventId, {
          method: "DELETE",
          headers: {
            Authorization: MY_AUTH,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            alert("Il prodotto è stato eliminato");
            window.location.href = "index.html";
          })
          .catch((error) => console.log(error));
      });
    });
};
myShop();

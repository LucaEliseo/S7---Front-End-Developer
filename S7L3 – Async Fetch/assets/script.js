fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => response.json())
  .then((books) => {
    let library = "";
    books.forEach((book) => {
      let cover = book.img;
      let bookElement = `
        <div class="col-4">
          <div class="card" style="width: 18rem">
            <img src="${cover}" class="card-img-top" alt="" />
            <div class="card-body">
              <h5 class="card-title">${book.title}</h5>
              <p class="card-text">
                ${book.price} $
              </p>
              <button class="scarta">Scarta</button>
            </div>
          </div>
        </div>
      `;
      library += bookElement;
    });
    document.getElementById("container").innerHTML = `
      <div class="row my-5" style="display: flex; flex-wrap: wrap;">
        ${library}
      </div>
    `;

    // Add event listener to all the Scarta buttons
    const scartaButtons = document.querySelectorAll(".scarta");
    scartaButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.target.closest(".card");
        card.remove();
      });
    });
  })
  .catch((error) => console.log(error));

  
 
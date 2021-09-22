window.onload = async () => {
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjdjMjRiYjUzZDAwMTViMTlmNzEiLCJpYXQiOjE2MzIzMTUzMzAsImV4cCI6MTYzMzUyNDkzMH0.kdEn_VWem83-DD0gu4hQZit-Om1MxwN1e4XiFcWnbeQ",
            }
        })
        const fetchedProducts = await response.json()
        displayProducts(fetchedProducts)
        //after the fetch, assing the result to a variable called how ever you want, then call displayProducts(theVariableYouCreated)
    } catch (err) {
        console.log(err)
    }
}

const displayProducts = (products) => {
    const productSection = document.querySelector(".productSection")

    if (products) {
        products.forEach((product) => {
          productSection.innerHTML += `<div class="row ">
            <div class="col-md-4">
            <div class="card" style="width: 18rem">
              <img src="${product.imageUrl}" class="card-img-top img-fluid" alt="Product Image" />
              <div class="card-body">
                <p class="card-text font-weight-bolder">
                  ${product.name}
                </p>
                <p class="card-text font-weight-bold">
                  ${product.brand}
                </p>
                <p class="card-text">
                  ${product.description}
                </p>
                <a href="#" class="btn btn-primary">£${product.price}</a>
                <a class="btn btn-warning" href="backoffice.html?id=${product._id}">Edit</a>
              </div>
              </div>
          </div>
          </div>`
        })
    }

}
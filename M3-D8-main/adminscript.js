const params = new URLSearchParams(location.search)
const id = params.get('id')
const url = "https://striveschool-api.herokuapp.com/api/product/"

window.onload = function () {

    if (id) document.querySelector("#page-title").innerHTML = "Edit product"
    getProductDetails(id)
  
    // want to set an if statement so if there is an id the method is changed from post to put
}

const handleSubmit = async (event) => {
    event.preventDefault()
    
    const url = "https://striveschool-api.herokuapp.com/api/product/"

    const myProduct = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        brand: document.getElementById("brand").value,
        imageUrl: document.getElementById("imageUrl").value,
        price: document.getElementById("price").value,

    }

    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(myProduct), // To convert myProduct from an Object to a String
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjdjMjRiYjUzZDAwMTViMTlmNzEiLCJpYXQiOjE2MzIzMTUzMzAsImV4cCI6MTYzMzUyNDkzMH0.kdEn_VWem83-DD0gu4hQZit-Om1MxwN1e4XiFcWnbeQ",
            }
        })
    } catch (err) {
        console.log(err)
    }
}


async function deleteProduct() {
      
      try {
          const response = await fetch(url + id, {
              method: 'DELETE',
              headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjdjMjRiYjUzZDAwMTViMTlmNzEiLCJpYXQiOjE2MzIzMTUzMzAsImV4cCI6MTYzMzUyNDkzMH0.kdEn_VWem83-DD0gu4hQZit-Om1MxwN1e4XiFcWnbeQ",
            } })

        if (!response.ok) throw new Error("Failed to delete product")

        alert("All good - product deleted successfully.")
        location.assign("index.html")
      } catch (error) {
        alert(error.message)
      }
    
}
    
async function getProductDetails(id) {
     
      try {
        const response = await fetch(url + id, {
          headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMjdjMjRiYjUzZDAwMTViMTlmNzEiLCJpYXQiOjE2MzIzMTUzMzAsImV4cCI6MTYzMzUyNDkzMH0.kdEn_VWem83-DD0gu4hQZit-Om1MxwN1e4XiFcWnbeQ",
            }
        })
        const product = await response.json()

        console.log(product)
        console.log(Object.keys(product))

        Object.keys(product).forEach(key => { // Use Object.keys with product as parameter to get each key within API entry, for each of them we get 
          const field = document.querySelector(`#${key}`)
          if (field) field.value = product[key] // if there is a value that matches #${key}, assign the value for each of the keys from the product object to that field
        })
      } catch (error) {
        console.log(error)
      }
    }

    // getting JSON error at position 0, need to check and fix

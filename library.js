const getBooks = function () {
  return "https://striveschool-api.herokuapp.com/books"
}

fetch(getBooks())
  .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("Errore nel recupero del libro")
    }
  })
  .then((books) => {
    console.log(books)
  })
  .catch((error) => {
    console.error(error)
  })

const bookImg = document.createElement("img")
bookImg.classList.add("card-img-top")
bookImg.setAttribute("src", getBooks.img)
bookImg.setAttribute("alt", getBooks.title)

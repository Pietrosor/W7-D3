const getBooks = function () {
  const booksURL = "https://striveschool-api.herokuapp.com/books"
}
console.log(getBooks)
fetch(getBooks).then((response) => {
  if (response.ok) {
    return response.json()
  } else {
    throw new Error("Errore nel recupero del libro")
  }
})

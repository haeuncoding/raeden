import "./BookForm.css"
import { scanBook, createBook } from "../store/books";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const BookForm = () => {

  const dispatch = useDispatch()
  const [isbn, setIsbn] = useState("")

  useEffect = () => {

  }

  const handleSubmit = async e => {
    e.preventDefault()
    const isbnData = {
      bibkeys: isbn
    }
    dispatch(scanBook(isbnData))
    .then((response) => {
        console.log(response)
      })
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="" value={isbn} onChange={e => setIsbn(e.target.value)} />
      <button type="submit" value="submit">
        click me!  
      </button>
    </form>
    </>
  )
}

export default BookForm;
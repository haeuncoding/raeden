import "./BookForm.css"
import { scanBook, createBook } from "../store/books";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
const BookForm = () => {

  const dispatch = useDispatch()
  const [isbn, setIsbn] = useState("")

  const handleSubmit = () => {

  }

  return (
    <>
    <form>
      <input type="text" name="" value={isbn} onChange={setIsbn} />
      <button type="submit" handleSubmit={handleSubmit} value="submit">
        click me!  
      </button>
    </form>
    </>
  )
}

export default BookForm;
import {Book} from "../interfaces/Book"

export abstract class BooksRepository {
    abstract createBook(book: Book): void
    abstract getBook(id: number): Book | null
    abstract getBooks(): Book[]
    abstract updatedBook(id: number, updateBook: Book): void
    abstract deleteBook(id: number): void
}
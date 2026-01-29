type Book = {
  id: number;
  title: string;
  published: boolean;
  publisher: string;
};

const books: Book[] = [
  { id: 1, title: 'React basic', published: false, publisher: 'Manning' },
  { id: 2, title: 'Advanced Hooks', published: false, publisher: 'Oreilly' },
  { id: 3, title: 'JSX in Depth', published: false, publisher: 'Packt' },
];

// published: true 책 fiter
const publisheds = books.filter((book) => book.published);

function Book() {
  return (
    <>
      {/* 제목 : Published Books => publisheds.length > 0 */}
      {publisheds.length > 0 && <h2>Published Books</h2>}
      {/* publisheds.length > 0(t) => 책 정보 보여주기  */}
      {/* publisheds.length > 0(f) => No published books found  */}
      {publisheds.length > 0 ? (
        publisheds.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em>- {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found</p>
      )}
    </>
  );
}

export default Book;

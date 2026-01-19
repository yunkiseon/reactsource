import axios from 'axios';
import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

function BookApp() {
  const [books, setBooks] = useState<Book[]>([]);

  // fetch() : 브라우저 함수여서 설치 필요 없음
  // axios() : node.js 환경에선 설치/ 타임리프등에선 <script src=""><script>
  // await : await 은 async 함수에서만 사용 가능

  // 비동기식 코드를 동기식처럼 보이게하기. 동기식이 되는 것은 아니지만 그렇게 보이게 가능
  //
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('/data/books.json');
        //axios는 자동으로 json 파싱을 해줌
        setBooks(res.data);
      } catch (error) {
        console.error('Failed', error);
      }
    };
    fetchBooks();
  }, []); // [] : 시기를 안정해놓으면 한 번ㅁ나 실행함

  return (
    <>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </>
  );
}

export default BookApp;

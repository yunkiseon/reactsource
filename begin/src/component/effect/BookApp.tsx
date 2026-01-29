import axios from 'axios';
import { useEffect, useState } from 'react';

type Book = {
  id: number;
  title: string;
  author: string;
};

function BookApp() {
  const [books, setBooks] = useState<Book[]>([]);

  // fetch() : 브라우저 함수(설치 필요 없음)
  // axios() : nodejs 환경에서는 설치 / cdn 방식 <script src=""></script>

  // fetch(경로, {headers, data}).then(데이터도착여부 / 도착 데이터만 원하는 형식으로 변환).then(변환된 데이터 화면처리).catch(에러).finally(무조건실행)

  // 비동기식 작업을 동기식 코드처럼 보이도록 만들기

  //   useEffect(() => {
  //     const fetchBooks = async () => {
  //       try {
  //         const res = await fetch('/data/books.json');

  //         if (!res.ok) {
  //           throw new Error('네트워크 or 서버 확인');
  //         }

  //         const data = await res.json();
  //         setBooks(data);
  //       } catch (error) {
  //         console.error('Failed ', error);
  //       }
  //     };
  //     fetchBooks();
  //   }, []); // [] : 한번만 실행

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('/data/books.json');
        // axios 는 자동으로 json 파싱
        setBooks(res.data);
      } catch (error) {
        console.error('Failed ', error);
      }
    };
    fetchBooks();
  }, []);

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

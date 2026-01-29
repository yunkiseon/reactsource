import type { Topic } from '../types/topic';
import Article from './Article';
import Header from './Header';
import Nav from './Nav';

const topics: Topic[] = [
  { id: 1, title: 'html', body: 'html 이란' },
  { id: 2, title: 'css', body: 'css 이란' },
  { id: 3, title: 'js', body: 'javascript 이란' },
];

function MyApp() {
  return (
    <>
      <Header title={'WEB 구성 요소'} />
      <Nav topics={topics} />
      <Article />
    </>
  );
}

export default MyApp;

import Article from './Article';
import Header from './Header';
import Nav from './Nav';
import type { Topic } from './types/topic';

const topics: Topic[] = [
  { id: 1, title: 'html', body: 'html 이란' },
  { id: 2, title: 'css', body: 'css란' },
  { id: 2, title: 'js', body: 'javascript란' },
];

function MyApp() {
  return (
    <>
      <Header title={'Web 구성 요소'} />
      <Nav topics={topics} />
      <Article />
    </>
  );
}

export default MyApp;

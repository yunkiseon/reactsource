import './App.css';
import Array from './component/Array';
import Hello from './component/Hello';
import MyComponent from './component/MyComponent';

function App() {
  const name = '리액트';

  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontweight: 'bold',
    padding: 16, // 단위 생략 -> 기본 px
  };

  const getGretting = (name: string): string => `Hello! ${name}`;
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString();
  };

  // <></> : react fragment-> 화면에선 표현되지 않음
  // 여러 개의 요소를 하나로 묶기 위해서 사용

  // html 과의 차이점 html은 class, tsx-jsx는 className
  // for -> htmlFor, readonly -> readOnly
  // maxlength -> maxLength
  return (
    <>
      <label htmlFor=""></label>
      <input type="text" name="" id="" readOnly />
      <p className="">{getGretting('Alice')}</p>
      <p>{formatDate(new Date())}</p>
      <p>
        Good
        {(() => {
          const hours = new Date().getHours();
          return hours < 12 ? 'morning' : 'afternoon';
        })()}
      </p>
      <Hello></Hello>
      {/* 주석 */}
      <MyComponent />
      <div style={{ color: 'red', fontSize: '25px' }}>{name}</div>
      {/* if else : 삼항연산자 */}
      {name === '리액트' ? <h1>리액트입니다.</h1> : <h1>리액트가 아닙니다.</h1>}
      {/* 특정 조건을 만족할 때만 내용을 보여주고 만족하지 않았을 때 아무것도 안함 && */}
      {name === '리액트' && <h1>리액트입니다.</h1>}
      {/* ??, || : null, undefined 인 경우 기본값을 제공하는 용도로 사용. 
      그러나 ||의 경우에는 빈 값에도 기본값 제공 */}
      <p style={style}>name: {name ?? <em>No Name</em>}</p>
      <p>name: {name || <em>No Name</em>}</p>
      <Array />
    </>
  );
}

export default App;

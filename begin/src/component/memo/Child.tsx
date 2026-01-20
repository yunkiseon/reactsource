import React from 'react';

// type or interface
type ChildProps = {
  name: string;
  color: string;
  age?: number;
};

function Child({ active, onClick }) {
  console.log('child rendered');
  return (
    <>
      <h1 className="text-3xl">Child : {active ? 'Active' : 'Not Active'}</h1>
      <button className="border bg-amber-600 p-3" onClick={onClick}>
        증가
      </button>
    </>
  );
}

export default React.memo(Child);
// 이렇게 컴포넌트 자체에 메모를 적용할 수 있다. 그러면 부모렌더링시 부모만 됨
// useCallback: 자식에게 내려가는 함수가 많고 레더링 비용이 클 때
// 그런데 onClick이라는 함수를 내려보낸 이후엔 memo가 적용되지 않는다.
// 함수는 렌더링 될 때마다 새로운 함수가 됨
// usecallback 적용 이후 -> 재생성 안됨

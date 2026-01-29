// type or interface

import React from 'react';

// 구조분해할당
function Child({ active, onClick }: { active: boolean; onClick: () => void }) {
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

import { useEffect, useState } from 'react';

function LifeCycle() {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    console.log('1. Mouted');
    return () => console.log('3. Unmonted');
    // selected 가 있으면 unmount, mount 일어나지만 없으면 일어나지 않음
    // 즉 아래 []에 넣는 것은 mount가 일어날 시점을 넣는 것이다.
  }, [selected]);
  console.log('-----Rendering-----');
  return (
    <>
      <div className="lfex p03 mx-3 mt-10">
        {['', 'ClassComp', 'FuncComp'].map((option) => (
          <label htmlFor="" className="p-3" key={option}>
            <input
              type="radio"
              value={option}
              checked={selected === option}
              onChange={(e) => setSelected(e.target.value)}
            />
            {option || 'None'}
          </label>
        ))}
      </div>
    </>
  );
}

export default LifeCycle;

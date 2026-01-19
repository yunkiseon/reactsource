import { useRef } from 'react';

function InputRef() {
  const inputRef = useRef<null | HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <div className="mt-5">
        <input type="text" className="border p-4" ref={inputRef} />
        <button className="bg-orange-500 p-4">Focus Input</button>
      </div>
    </>
  );
}

export default InputRef;

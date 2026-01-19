function Button() {
  const handleClick = () => {
    alert('버튼클릭');
  };
  return (
    <>
      <button className="bg-orange-500 p-4" onClick={() => alert('버튼클릭')}>
        +1
      </button>
      {/* <button className="bg-orange-500 p-4" onClick={handleClick}>
        +1
      </button> */}
    </>
  );
}

export default Button;

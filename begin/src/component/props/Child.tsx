// type or interface
type ChildProps = {
  name: string;
  color: string;
  age?: number;
};

function Child({ name, color, age = 20 }: ChildProps) {
  // 만약 function Child(props: ChildProps) 로 내리면 readOnly 자동 삽입
  name += 'from Parent';
  return (
    <>
      <h1 className="text-3xl">자식 컴포넌트</h1>
      <h2 className="text-xl">{name}</h2>
      <h2 className="text-xl">{color}</h2>
      <h2 className="text-xl">{age}</h2>
    </>
  );
}

export default Child;

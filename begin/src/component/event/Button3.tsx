import type { ReactNode } from 'react';

function PlayButton({ moviename }: { moviename: string }) {
  // 영화명 출력 : Playing 악마는 프라다를 입는다
  const handlePlayClick = () => alert(`Playing ${moviename}`);

  // 영화명
  return <Button3 onClick={handlePlayClick}>Play "{moviename}"</Button3>;
}

function UploadButton() {
  const handleUploadClick = () => alert(`Uploading!`);

  return <Button3 onClick={handleUploadClick}>Upload Image</Button3>;
}

// 함수, children
type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

function Button3({ onClick, children }: ButtonProps) {
  // 버튼이 클릭되면 alert('버튼클릭')

  return (
    <>
      <button className="bg-orange-500 p-4" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

function Toolbar() {
  return (
    <>
      <PlayButton moviename={'악마가 프라다를 입는다'} />
      <UploadButton />
    </>
  );
}

export default Toolbar;

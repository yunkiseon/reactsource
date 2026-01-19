import type { ReactNode } from 'react';

function PlayButton({ movieName }: { movieName: string }) {
  // 영화명 출력
  const handlePlayClick = () => alert(`Playing ${movieName}`);
  return <Button3 onClick={handlePlayClick}>Play "{movieName}"</Button3>;
}
function UploadButton({}: {}) {
  const handleUploadClick = () => alert('Uploading!');
  return <Button3 onClick={handleUploadClick}>Upload Image </Button3>;
}

type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

function Button3({ onClick, children }: ButtonProps) {
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
      <PlayButton movieName={'악마가 프라다를 입는다'} />
      <UploadButton />
    </>
  );
}

export default Toolbar;

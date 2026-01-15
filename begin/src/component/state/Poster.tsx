import { useState } from 'react';
import nego from '../../assets/img/negotiation1.jpg';
import oppen from '../../assets/img/oppen1.jpg';

const Poster = () => {
  const [src, setSrc] = useState<string>(nego);

  // 버튼 상태 변화 저장
  const [btn, setBtn] = useState<boolean>(true);
  const onToggleHandled = () => {
    if (btn) {
      setSrc(nego);
      setBtn(false);
    } else {
      setSrc(oppen);
      setBtn(true);
    }
  };
  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <img src={src} alt="" width={300} height={500} />
          <button
            className="m-2 w-32 rounded bg-blue-500 p-4 text-2xl text-white"
            onClick={onToggleHandled}
          >
            이미지 변경
          </button>
        </div>
      </div>
    </>
  );
};

export default Poster;

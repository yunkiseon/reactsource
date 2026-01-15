type BtnProps = {
  style: React.CSSProperties;
  count: number;
  onClick: () => void;
};

export default function MyButtotn({ style, count, onClick }: BtnProps) {
  return (
    <>
      <button style={style} onClick={onClick}>
        Clicked {count} times
      </button>
    </>
  );
}

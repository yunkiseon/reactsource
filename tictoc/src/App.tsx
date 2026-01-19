import { useState } from 'react';
import './App.css';
import Square from './Square';
import Board from './Board';
import type { Squares } from './types/type';

function App() {
  // x or o 번갈아 처리하기 위한 변수
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // history 관리 -> 2차원 배열로 경기 기록 관리
  const [history, setHistory] = useState<Squares[]>([Array(9).fill(null)]);

  // 이전 변수 관리: 몇번째 번호
  const [currentMove, setcurrentMove] = useState<number>(0);

  // 이전 history 변수 : 몇번째 번호를 가지고 몇번 네모를 눌렀는지
  const currentSquares = history[currentMove];
  const handlePlay = (nextSquare: Squares) => {
    const nextHistory: Squares[] = [
      ...history.slice(0, currentMove + 1),
      nextSquare,
    ];
    setHistory(nextHistory);
    setcurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  // 지난 플래이 확인
  const jumpTo = (nextMove: number) => {
    setcurrentMove(nextMove);
    setXIsNext(nextMove % 2 == 0);
  };

  // 오른쪽에 기록 보여주기
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to Game Start';
    }
    return (
      <li key={move} className="mt-0.5">
        <button
          onClick={() => jumpTo(move)}
          className="rounded-xs bg-gray-300 p-1 text-black"
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <>
      <div className="grid auto-cols-max grid-flow-col gap-4">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <ol>{moves}</ol>
      </div>
    </>
  );
}

export default App;

import { useContext } from 'react';
import { ToggleContext } from './Toggle.Context';

export function useToggle() {
  const context = useContext(ToggleContext);
  // prop 등을 이용해서 안내려주어도 자식들에게 잘 내려가짐을 확인가능
  if (!context) {
    throw new Error('ToggleProvider null');
  }
  return context;
}

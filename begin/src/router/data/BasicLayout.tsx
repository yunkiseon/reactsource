import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

function BasicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-200">
      <div>{children}</div>
    </div>
  );
}

export default BasicLayout;

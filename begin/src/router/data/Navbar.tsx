import { Link, Outlet, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import BasicLayout from './BasicLayout';

function Navbar() {
  return (
    <BasicLayout>
      <div className="bg-gray-200">
        <nav className="flex h-20 items-center p-3">
          <Link to={'/'} className="basis-3xs">
            HOME
          </Link>
          <Link to={'/about'} className="basis-3xs">
            ABOUT
          </Link>
          <Link to={'/contact'} className="basis-3xs">
            CONTACT
          </Link>
          <Link to={'/account'} className="basis-3xs">
            ACCOUNT
          </Link>
        </nav>
      </div>
      <Outlet /> {/* 자식 라우트가 여기 렌더링됨 */}
    </BasicLayout>
  );
}

export default Navbar;

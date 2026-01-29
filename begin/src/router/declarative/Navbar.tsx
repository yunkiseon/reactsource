import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

function Navbar() {
  return (
    <>
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
        </nav>
      </div>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        {/* <Route path="/account" Component={Account} >
            <Route path="login" Component={Login} />
            <Route path="register" Component={Register} />            
        </Route> */}
      </Routes>
    </>
  );
}

export default Navbar;

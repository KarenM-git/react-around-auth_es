import { useLocation, Link } from "react-router-dom";
import logo from "../images/logo.png";

function Header({onLogout}) {
  const { pathname } = useLocation();
  
  return (
    <header className='header'>
      <img src={logo} className='header__logo' alt='around the U.S. logo' />
      {pathname === "/signin" && <Link to='/signup'> Sign up </Link>}
      {pathname === "/signup" && <Link to='/signin'> Log in</Link>}
      {pathname === "/" && <><span> user email</span> <button onSubmit={onLogout}>Log Out</button></>}
    </header>
  );
}

export default Header;

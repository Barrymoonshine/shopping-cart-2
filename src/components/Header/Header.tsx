import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/' style={{ textDecoration: 'none' }}>
        <h3>Fake store</h3>
      </NavLink>
      <nav>
        <ul>
          <NavLink to='/products' style={{ textDecoration: 'none' }}>
            <h4>Products</h4>
          </NavLink>
          <li>Cart TBC</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

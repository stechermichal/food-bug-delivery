import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import LoginForm from '../login/LoginForm';
import { useSelector } from 'react-redux';

import styles from './navbar.module.scss';

function Navbar() {
  const userRole = useSelector((state) => state.session.role);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  return userRole === 'Owner' ? (
    <Nav className={styles.nav} tabs>
      <NavItem>
        <img
          src="https://images.deliveryhero.io/image/fd-hu/cms/logo/fp/20210906_foodpanda_logo_600x150.jpg?webp=0"
          alt="food-panda-logo"
        />
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/" active>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <LoginForm />
      </NavItem>
      <NavItem>
        <Button color="primary" outline>
          <i className="fa fa-shopping-cart" />
        </Button>
      </NavItem>
    </Nav>
  ) : (
    <Nav className={styles.nav} tabs>
      <NavItem>
        <img
          src="https://images.deliveryhero.io/image/fd-hu/cms/logo/fp/20210906_foodpanda_logo_600x150.jpg?webp=0"
          alt="food-panda-logo"
        />
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/" active>
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <LoginForm />
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/cart" active>
          <i className="fa fa-shopping-cart" />
          <span>{cartTotalQuantity}</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
}

export default Navbar;

// return (
//   <Nav className={styles.nav} tabs>
//     <NavItem>
//       <img
//         src="https://images.deliveryhero.io/image/fd-hu/cms/logo/fp/20210906_foodpanda_logo_600x150.jpg?webp=0"
//         alt="food-panda-logo"
//       />
//     </NavItem>
//     <NavItem>
//       <NavLink tag={Link} to="/" active>
//         Home
//       </NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink tag={Link} to="/admin/restaurants" active>
//         Restaurants
//       </NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink tag={Link} to="/admin/meals" active>
//         Meals
//       </NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink tag={Link} to="/admin/meals/new" active>
//         New Meal
//       </NavLink>
//     </NavItem>
//     <NavItem>
//       <NavLink tag={Link} to="/owner/home" active>
//         Owner home
//       </NavLink>
//     </NavItem>
//     <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle nav caret>
//         Delivering To <i className="fas fa-map-marker-alt" />
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem>Szív u. 11, 1036 Budapest</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>Retek u. 2, 1023 Budapest</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//     <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
//       <DropdownToggle nav caret>
//         When
//       </DropdownToggle>
//       <DropdownMenu>
//         <DropdownItem>Now</DropdownItem>
//         <DropdownItem divider />
//         <DropdownItem>13:00</DropdownItem>
//         <DropdownItem>14:00</DropdownItem>
//         <DropdownItem>15:00</DropdownItem>
//       </DropdownMenu>
//     </Dropdown>
//     <NavItem>
//       <Button color="primary" outline>
//         HU
//       </Button>
//     </NavItem>
//     <NavItem>
//       <LoginForm />
//     </NavItem>
//     <NavItem>
//       <Button color="primary" outline>
//         <i className="fa fa-shopping-cart" />
//       </Button>
//     </NavItem>
//   </Nav>
// );

import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {

  render() {

    return (
      <div>
        <NavLink exact activeClassName='active' to='/'>
          Noteful
        </NavLink>
      </div>
    );
  }

}

export default Header;

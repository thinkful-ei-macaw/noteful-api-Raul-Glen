import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink exact activeClassName='active' to='/'>
        Noteful
      </NavLink>
    </div>
  );
}

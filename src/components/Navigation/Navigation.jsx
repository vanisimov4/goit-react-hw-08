import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={CSS.link} to="/">
        Home
      </NavLink>
    </nav>
  );
};

import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

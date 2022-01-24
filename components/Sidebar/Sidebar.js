import Link from 'next/dist/client/link';
import { FaFireAlt, FaCalendarAlt, FaStar, FaSearch, FaSignInAlt, FaBars } from 'react-icons/fa';
import SidebarLogo from '../Layout/SidebarLogo';
import SearchBar from '../SearchBar/SearchBar';
import classes from './sidebar.module.css';

export default function Sidebar() {
  return (
    <div>
      <button className={classes.hamburger}>
        <FaBars size={35} />
      </button>
      <nav className={classes.sidebar}>
        <SidebarLogo />
        <div className={classes.sidebarContainer}>
          <div className={classes.sidebarLink}>
            <FaFireAlt />
            <Link href='/popular'>Popular</Link>
          </div>
          <div className={classes.sidebarLink}>
            <FaCalendarAlt />
            <Link href='/coming_soon'>Coming Soon</Link>
          </div>
          <div className={classes.sidebarLink}>
            <FaStar />
            <Link href='/trending'>Trending</Link>
          </div>
          <div className={classes.sidebarLink}>
            <FaSearch />
            <Link href='/search'>Search</Link>
          </div>
        </div>
        <div className={classes.btnContainer}>
          <Link href='/auth'>
            <button className={classes.button}>
              Login
              <FaSignInAlt size={15} />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

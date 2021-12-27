import Link from 'next/link';
import classes from '../layout/navigation.module.css';
import { FaCalendarAlt, FaFireAlt, FaStar, FaSearch } from 'react-icons/fa';
import Logo from './Logo';

export default function Navigation() {
  return (
    <div className={classes.container}>
      <Logo />
      <ul className={classes.link_list}>
        <div>
          <FaFireAlt />
          <Link href='/popular'>Popular</Link>
        </div>
        <div>
          <FaCalendarAlt />
          <Link href='/coming_soon'>Coming Soon</Link>
        </div>
        <div>
          <FaStar />
          <Link href='/trending'>Trending</Link>
        </div>
        <div>
          <FaSearch />
          <Link href='/search'>Search</Link>
        </div>
      </ul>
    </div>
  );
}

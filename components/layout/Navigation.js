import Link from 'next/link';
import classes from '../layout/navigation.module.css';
import { FaCalendarAlt, FaFireAlt, FaStar, FaChartBar } from 'react-icons/fa';
import Logo from './Logo';

export default function Navigation() {
  return (
    <div className={classes.container}>
      <Logo />
      <ul>
        <div>
          <FaFireAlt />
          <Link href='/popular'>Popular</Link>
        </div>
        <div>
          <FaChartBar />
          <Link href='/trending'>Trending</Link>
        </div>
        <div>
          <FaCalendarAlt />
          <Link href='/coming_soon'>Coming Soon</Link>
        </div>
        <div>
          <FaStar />
          <Link href='/top_rated'>Top Rated</Link>
        </div>
      </ul>
    </div>
  );
}

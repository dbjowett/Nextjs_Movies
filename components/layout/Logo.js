import { FaTicketAlt } from 'react-icons/fa';
import classes from './logo.module.css';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className={classes.logo_nav_container}>
      <Link href='/popular' passHref>
        <div className={classes.logo}>
          <FaTicketAlt size={80} />
          <h1>MOVIES</h1>
        </div>
      </Link>
    </div>
  );
}

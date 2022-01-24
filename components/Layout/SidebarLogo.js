import { FaTicketAlt, FaSignInAlt } from 'react-icons/fa';
import classes from './sidebarlogo.module.css';
import Link from 'next/link';

export default function SidebarLogo() {
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

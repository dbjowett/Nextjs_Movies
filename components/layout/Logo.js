import { FaTicketAlt, FaSignInAlt } from 'react-icons/fa';
import classes from './logo.module.css';

export default function Logo() {
  return (
    <div className={classes.logo_nav_container}>
      <div className={classes.logo}>
        <FaTicketAlt size={80} />
        <h1>MOVIES</h1>
      </div>
      <div>
        <button className={classes.button}>
          Login
          <FaSignInAlt size={15} />
        </button>
      </div>
    </div>
  );
}

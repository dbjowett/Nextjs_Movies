import Sidebar from '../Sidebar/Sidebar';
import classes from './page.module.css';

export default function Page({ children }) {
  return (
    <div>
      <Sidebar />
      <div className={classes.mainContainer}>{children}</div>
    </div>
  );
}

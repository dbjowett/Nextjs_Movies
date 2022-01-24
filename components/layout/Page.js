import Sidebar from '../Sidebar/Sidebar';
import classes from '../Layout/page.module.css';

export default function Page({ children }) {
  return (
    <div>
      <Sidebar />
      <div className={classes.mainContainer}>{children}</div>
    </div>
  );
}

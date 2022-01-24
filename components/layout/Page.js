import Sidebar from '../Sidebar/Sidebar';
import classes from './page.module.css';
// import Navigation from './Navigation';

export default function Page({ children }) {
  return (
    <div>
      {/* <Navigation /> */}
      <Sidebar />
      <div className={classes.mainContainer}>{children}</div>
    </div>
  );
}

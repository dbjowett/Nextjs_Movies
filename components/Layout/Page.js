import Navigation from './Navigation';

// To push the content from under the sidebar
import classes from './navigation.module.css';

export default function Page({ children }) {
  return (
    <div style={{ paddingBottom: '50px' }}>
      <Navigation />
      <div className={classes.main}>{children}</div>
    </div>
  );
}
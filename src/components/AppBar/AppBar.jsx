import MainNavigation from 'components/MainNavigation/MainNavigation';
import styles from '../AppBar/AppBar.module.css';
const AppBar = () => {
  return (
    <header className={styles.header}>
      <MainNavigation />
    </header>
  );
};
export default AppBar;
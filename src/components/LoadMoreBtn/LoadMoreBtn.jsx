import PropTypes from 'prop-types';
import styles from '../LoadMoreBtn/LoadMoreBtn.module.css';
export default function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={styles.loadMoreBtn}>
      Show more
    </button>
  );
}
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

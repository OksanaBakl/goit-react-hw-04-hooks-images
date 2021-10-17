import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ onSearch }) {
  return (
    <button type="button" className={styles.Button} onClick={onSearch}>
      Load more
    </button>
  );
}
export default Button;

Button.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

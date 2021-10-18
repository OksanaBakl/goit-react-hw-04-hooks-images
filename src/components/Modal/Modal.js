import { useEffect } from 'react';
// import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

function Modal({ onModalClick, currentImage }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);

    return () => {
      window.removeEventListener('keydown', closeModalByEsc);
    };
  });

  const closeModalByEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }

    onModalClick();
  };

  const closeModalByBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onModalClick();
    }
  };

  return (
    <div className={styles.Overlay} onClick={closeModalByBackdropClick}>
      <div className={styles.Modal}>
        <img
          src={currentImage.largeImageURL}
          alt={currentImage.tags.split(',')[0]}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onModalClick: PropTypes.func.isRequired,
  currentImage: PropTypes.object.isRequired,
};

export default Modal;
// const modalRoot = document.querySelector('#modal-root');

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }
//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div onClick={this.handleBackdropClick} className={styles.Overlay}>
//         <div className={styles.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
// }

// export default Modal;

// Modal.propTypes = {
//   onClose: PropTypes.func,
// };

import propTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ image, modalImage, description, onModalClick }) {
  return (
    <li className={styles.ImageGalleryItem} onClick={onModalClick}>
      <img
        src={image}
        data-src={modalImage}
        alt={description}
        className={styles.ImageGalleryItem__image}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  // image: propTypes.string.isRequired,
  modalImage: propTypes.string.isRequired,
  description: propTypes.string,
  onModalClick: propTypes.func.isRequired,
};

export default ImageGalleryItem;

// const ImageGalleryItem = ({ src, tags, openModal }) => {
//   return (
//     <li className={styles.ImageGalleryItem}>
//       <img
//         className={styles.ImageGalleryItem__image}
//         src={src}
//         alt={tags}
//         onClick={openModal}
//       />
//     </li>
//   );
// };

// export default ImageGalleryItem;

// ImageGalleryItem.propTypes = {
//   openModal: propTypes.func,
// };

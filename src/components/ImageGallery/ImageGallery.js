import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onModalClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL, tags }, index) => (
        <ImageGalleryItem
          onModalClick={() => onModalClick(index)}
          key={`${id}-${uuidv4()}`}
          image={webformatURL}
          modalImage={largeImageURL}
          description={tags.split(',')[0]}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: propTypes.array,
  onModalClick: propTypes.func,
};

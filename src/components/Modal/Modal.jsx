import styles from './Modal.module.css';
import PropTypes from 'prop-types';

export const Modal = ({image, onClose}) =>{

  
  
  window.addEventListener('keydown', handleKeyDown);
 
  function handleKeyDown (event)  {
    if (event.code === 'Escape') {
      onClose();
      window.removeEventListener('keydown', handleKeyDown);
    }
  };

 
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
        }
  };
    return (
  <div className={styles.overlay} onClick={handleBackdropClick}>
  <div className={styles.modal} >
    <img src={image.largeImageURL} alt="" />
  </div>
  </div>
    )
}
Modal.propTypes = {
  image: PropTypes.string,
  onClose: PropTypes.func}

 

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

export class Searchbar extends React.Component {
  state = {
    imageName: '',
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('not name');
      return;
    }
    this.props.onSubmit(this.state.imageName);
  };

  handleChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };
  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={styles.searchFormButton}>
            <span className={styles.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.searchFormInput}
            type="text"
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

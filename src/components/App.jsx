import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.module.css'
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends React.Component  {
state ={
  imageName: ""
}

  handleSearchSubmit = imageName =>{
  this.setState({imageName})
    console.log(imageName)
}
 

  render(){
  return (
    <div className={styles.app}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
        
      }}
    >
    <Searchbar onSubmit={this.handleSearchSubmit}/>
    <ImageGallery imageName={this.state.imageName}/>
    
    </div>
  );
};
}
App.propTypes = {
  imageName: PropTypes.string}

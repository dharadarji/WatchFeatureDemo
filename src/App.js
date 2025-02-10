import React, { Component } from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './Topbar/TopBar';
import ProductData from './Utils/ProductData';

class App extends Component {

  state = {
    productData: ProductData,
    currenntPreviewImagePosition : 0,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {    
      this.setState({
        currenntPreviewImagePosition: pos
      });
  }

  onFeatureItemClick = (pos) => {    
    this.setState({
      currentSelectedFeature : pos
    });
}

  render() {
    return (
      <div className="App">
        <TopBar />
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currenntPreviewImagePosition].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          <div>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
            currenntPreviewImagePosition={this.state.currenntPreviewImagePosition} onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

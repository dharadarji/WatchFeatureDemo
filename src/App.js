import React, { Component } from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import TopBar from './Topbar/TopBar';
import ProductData from './Utils/ProductData';

function App (arg_obj) {

  
    return(
      <div className="container-fluid">
        <TopBar/>
			<div className="row">
		  
		  		<div className="col-12">{arg_obj.content}</div>
		  </div>	
		
		</div>
      

    );
  

  // state = {
  //   productData: ProductData,
  //   currenntPreviewImagePosition : 0,
  //   currentSelectedFeature: 0
  // }

  // onColorOptionClick = (pos) => {    
  //     this.setState({
  //       currenntPreviewImagePosition: pos
  //     });
  // }

  // shouldComponentUpdate(nextProps , nextState){

  //     if(nextState.currenntPreviewImagePosition === this.state.currenntPreviewImagePosition){
  //       return false;
  //     }
  //     return true;
  // } 

  // onFeatureItemClick = (pos) => {    
  //   this.setState({
  //     currentSelectedFeature : pos
  //   });
  // }

  // render() {
  //   console.log('Rendering..')
  //   return (
  //     <div className="App">
  //       <TopBar />
  //       <div className={classes.MainContainer}>
  //         <div className={classes.ProductPreview}>
  //           <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currenntPreviewImagePosition].imageUrl} 
  //           currentSelectedFeature={this.state.currentSelectedFeature} />
  //         </div>
  //         <div>
  //           <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
  //           currenntPreviewImagePosition={this.state.currenntPreviewImagePosition} onFeatureItemClick={this.onFeatureItemClick}
  //           currentSelectedFeature={this.state.currentSelectedFeature}/>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
}

export default App;

import React, { Component } from 'react';
import TopBar from './Topbar/TopBar';

function App (arg_obj) {

  
    return(
      <div className="container-fluid">
        <TopBar/>
			<div className="row">
		  
		  		<div className="col-12">{arg_obj.content}</div>
		  </div>	
		
		</div>
    );
}

export default App;

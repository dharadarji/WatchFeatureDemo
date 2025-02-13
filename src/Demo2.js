import React , {Component} from 'react';
import './App.css';
import BlogCard from './BlogCard';
import { isArrayEmpty } from './Utils';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

class Demo2 extends Component {

  constructor(props){
    super(props);

    this.state = {
      showBlogs : true,
      blogArr : [
        {
        id:1,
        title : 'You Are Under Construction',
        desc : 'Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. ',
        color : 'lightblue',
        likeCount : 0
      },
      {
        id:2,
        title : 'DhaJesus at the Center',
        desc : 'Christ came to show us who God is in a way that our minds and hearts could understand. understands us and what we’re going through, and He wants a relationship with us. The Almighty God, ',
        color : 'pink',
        likeCount : 0
      },
      {
        id:3,
        title : 'Let’s Grow',
        desc : 'Even those who don’t know Christ can do good things in the world. But the good that they do doesn’t bear the fruit of God. ',
        color:'lightgray',
        likeCount : 0
      },
    
      ]
    
    }

    console.log("iside constructor")
  }
  

   
  onLikeBtnClick = (pos) => {
     const UpdatedBlogList = this.state.blogArr;
     const updatedBlogObject = UpdatedBlogList[pos];
     updatedBlogObject.likeCount = updatedBlogObject.likeCount + 1;
     UpdatedBlogList[pos] = updatedBlogObject;

     this.setState({
      blogArr : UpdatedBlogList,
     })
  }

 

   buttonClick = () => {
    console.log(this.state.showBlogs)
      this.setState((prevState , preProps) => {
        return { showBlogs : !prevState.showBlogs  }  
      });
  }

  componentDidMount(){
    console.log("component didmount")
  }

  shouldComponentUpdate(){
    console.log("inside shouldComponentUpdate")
    return true;
  }  

  componentDidUpdate()
  {
    console.log("inside componentDidUpdate") 
  }

  // componentWillUnmount(){

  // }
  render(){
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map( (item , position) => {
    
      return(
        <BlogCard key={position} title={item.title} description={item.desc} color={item.color} 
        likeCount={item.likeCount} onLikeBtnClick = {() =>this.onLikeBtnClick(position)}/>
      )
    }
  
    )
    return(
      <div className="App">
      <button type="button" className="btn btn-primary" onClick={this.buttonClick}>{this.state.showBlogs ? 'Hide Blog' : 'Show Blog'}</button>
      <br/><br/>
      {this.state.showBlogs ? blogCards : null}
     
    </div>
    );
  }
}

export default Demo2;
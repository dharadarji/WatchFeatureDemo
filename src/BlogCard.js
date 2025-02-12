import React , {Component} from 'react'
import { dumpLogs } from './Utils';
import classes from './Blogcard.module.css'


class BlogCard extends Component {
 
  myStyle = {
    backgroundColor : this.props.color
  }

  componentWillUnmount(){
    console.log('unmounting blog cards')
  }

  render() {
  return(  
    
    <div className={classes.BlogCard} style={this.myStyle}>
    <h3  className='App'>{this.props.title}</h3>
      <p>{this.props.description}</p>
      <p>Like Count : <span className={classes.LikeCount}>{this.props.likeCount}</span> </p>
      <button onClick={this.props.onLikeBtnClick} className='btn btn-primary'>Like</button>
  </div>  
  
)
  }

}

export default BlogCard
